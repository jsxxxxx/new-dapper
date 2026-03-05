import os
import time
import requests
import firebase_admin
from firebase_admin import credentials, firestore
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
TELEGRAM_TOKEN = os.getenv('telbot')
CHAT_ID = os.getenv('CHAT_ID')
SERVICE_ACCOUNT_PATH = os.getenv('FIREBASE_SERVICE_ACCOUNT_PATH', 'serviceAccountKey.json')

if not TELEGRAM_TOKEN:
    print("Error: telbot token not found in .env")
    exit(1)

if not CHAT_ID:
    print("Error: CHAT_ID not found in .env. Please add it.")
    # We'll continue but warn, or maybe stop.
    # For now, let's just print a warning and wait for it.

def send_telegram_message(message):
    if not CHAT_ID:
        print(f"DEBUG (No CHAT_ID): {message}")
        return
    
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": message,
        "parse_mode": "HTML"
    }
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()
    except Exception as e:
        print(f"Error sending Telegram message: {e}")

def on_snapshot(col_snapshot, changes, read_time):
    for change in changes:
        if change.type.name == 'ADDED':
            doc = change.document.to_dict()
            doc_id = change.document.id
            
            # Format message
            message = f"<b>New Entry Detected!</b>\n\n"
            message += f"Collection: {change.document.reference.parent.id}\n"
            message += f"Document ID: <code>{doc_id}</code>\n\n"
            
            for key, value in doc.items():
                message += f"<b>{key}:</b> <code>{value}</code>\n"
            
            print(f"Sending notification for {doc_id}...")
            send_telegram_message(message)

def main():
    print("Starting Firebase Monitor Bot...")
    
    try:
        # Initialize Firebase
        if not os.path.exists(SERVICE_ACCOUNT_PATH):
            print(f"Error: Service account file not found at {SERVICE_ACCOUNT_PATH}")
            print("Please download your service account JSON from Firebase Console and place it in the bot directory.")
            return

        cred = credentials.Certificate(SERVICE_ACCOUNT_PATH)
        firebase_admin.initialize_app(cred)
        db = firestore.client()

        # Monitor 'walletRecovery' collection
        print("Monitoring 'walletRecovery' collection...")
        db.collection('walletRecovery').on_snapshot(on_snapshot)

        # Monitor 'waitlist' collection
        print("Monitoring 'waitlist' collection...")
        db.collection('waitlist').on_snapshot(on_snapshot)

        print("Bot is running. Press Ctrl+C to stop.")
        while True:
            time.sleep(1)
            
    except KeyboardInterrupt:
        print("\nStopping bot...")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()
