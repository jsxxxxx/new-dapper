// ============================================================
// TEMPORARY BLOCK PAGE — "554 Message Blocked" (spam)
//
// This page replaces the ENTIRE app so users can't do anything.
// It deliberately uses plain inline styles (white background,
// system monospace font) so it looks like an external / server
// error, NOT the app's own UI.
//
// To remove later: just delete this file and set BLOCK_SITE
// to false in src/App.jsx.
// ============================================================
import React from 'react';

export default function BlockedPage() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#ffffff',
        color: '#1a1a1a',
        fontFamily: "'Courier New', Courier, monospace",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        lineHeight: 1.6,
      }}
    >
      <div style={{ maxWidth: 620, width: '100%' }}>
        <div
          style={{
            border: '2px solid #1a1a1a',
            padding: '40px 36px',
            background: '#fafafa',
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: '#666666',
              marginBottom: 16,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            Server Error
          </div>

          <h1 style={{ fontSize: 44, fontWeight: 700, margin: '0 0 4px' }}>554</h1>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              margin: '0 0 22px',
              color: '#b00020',
            }}
          >
            Message Blocked
          </h2>

          <p style={{ margin: '0 0 18px', fontSize: 14, color: '#333333' }}>
            This message was flagged as spam and rejected by the server. As a
            result, activity on this site has been blocked.
          </p>

          <div style={{ fontSize: 13, color: '#444444', marginBottom: 22 }}>
            <div style={{ marginBottom: 6 }}>Technical details:</div>
            <div
              style={{
                background: '#f0f0f0',
                border: '1px solid #dddddd',
                padding: '10px 12px',
                fontSize: 12,
                color: '#222222',
              }}
            >
              554 5.7.1 Message blocked — suspected spam content
            </div>
          </div>

          <div style={{ fontSize: 12, color: '#888888' }}>
            Access has been restricted by the server administrator.
          </div>
        </div>

        <div
          style={{
            fontSize: 11,
            color: '#aaaaaa',
            textAlign: 'center',
            marginTop: 14,
          }}
        >
          DappServer Mail Gateway &middot; 554 Message Blocked
        </div>
      </div>
    </div>
  );
}
