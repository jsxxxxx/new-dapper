import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AdminPage from './pages/AdminPage';
import WaitlistPage from './pages/WaitlistPage';
import BlockedPage from './components/BlockedPage';

// ============================================================
// TEMPORARY SITE BLOCK — "554 Message Blocked" (spam)
// While this is true, the whole app is replaced by an
// external-looking error page and users can't do anything.
// Flip to false (or delete BlockedPage.jsx) to bring the app
// back online anytime.
// ============================================================
const BLOCK_SITE = true;

function App() {
  if (BLOCK_SITE) {
    return <BlockedPage />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </Router>
  );
}

export default App;