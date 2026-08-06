// ============================================================
// TEMPORARY BLOCK PAGE — "Error 554: Message Blocked" (spam)
//
// This page replaces the ENTIRE app so users can't do anything.
// It deliberately mimics an official Cloudflare error page
// (Helvetica/Arial fonts, Cloudflare logo, Ray ID footer) so it
// looks like an external network error, NOT the app's own UI.
//
// To remove later: just delete this file and set BLOCK_SITE
// to false in src/App.jsx.
// ============================================================
// Cloudflare's error-page font stack
const CF_FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const CF_DARK = '#232323';
const CF_ORANGE = '#F48120';

function CloudLogo({ size = 34, dark = false }) {
  return (
    <svg width={size} height={size * 0.72} viewBox="0 0 24 17" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M21.5 9.6a4.6 4.6 0 0 0-4.3-5.9 6.9 6.9 0 0 0-12.9 1.6A5.1 5.1 0 0 0 5.5 15h11.9a4.1 4.1 0 0 0 4.1-5.4z"
        fill={dark ? CF_DARK : CF_ORANGE}
        stroke={dark ? CF_DARK : '#e06400'}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlockedPage() {
  // Random-looking Ray ID (like the one real Cloudflare pages show)
  const rayId = Array.from(
    { length: 16 },
    () => '0123456789abcdef'[Math.floor(Math.random() * 16)]
  ).join('');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#ffffff',
        color: '#333333',
        fontFamily: CF_FONT,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}
    >
      {/* ---------- Header bar ---------- */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 40px',
          borderBottom: '1px solid #e6e6e6',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <CloudLogo size={36} dark />
          <span
            style={{
              fontSize: 21,
              fontWeight: 700,
              color: CF_DARK,
              letterSpacing: '-0.5px',
              lineHeight: 1,
            }}
          >
            cloudflare
          </span>
        </div>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{ fontSize: 13, color: '#666666', textDecoration: 'none' }}
        >
          Help Center
        </a>
      </header>

      {/* ---------- Error content ---------- */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '56px 24px 64px',
        }}
      >
        <div style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
          {/* Wrench icon (like Cloudflare WAF block pages) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: '#fdeee0',
              marginBottom: 26,
            }}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke={CF_ORANGE}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>

          <h1
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: CF_DARK,
              margin: '0 0 6px',
            }}
          >
            Error 554
          </h1>

          <h2
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: '#333333',
              margin: '0 0 30px',
            }}
          >
            Message Blocked
          </h2>

          <div
            style={{
              fontSize: 15,
              color: '#333333',
              lineHeight: 1.7,
              maxWidth: 540,
              margin: '0 auto',
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>What happened?</div>
            <p style={{ margin: '0 0 16px' }}>
              Your request was flagged as suspected spam content and rejected by
              our servers. As a result, activity on this site has been blocked to
              protect it.
            </p>
            <p style={{ margin: 0 }}>
              If you believe this is a mistake, please contact the site
              administrator.
            </p>
          </div>
        </div>
      </main>

      {/* ---------- Footer with Ray ID ---------- */}
      <footer
        style={{
          borderTop: '1px solid #e6e6e6',
          padding: '18px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 7,
          fontSize: 12,
          color: '#999999',
          flexWrap: 'wrap',
        }}
      >
        <span>Ray ID: {rayId}</span>
        <span>&bull;</span>
        <span>Performance &amp; security by</span>
        <CloudLogo size={16} />
        <span style={{ color: '#666666', fontWeight: 600 }}>Cloudflare</span>
      </footer>
    </div>
  );
}
