import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { LogOut, Search, Download, RefreshCw, Shield, Lock, Eye, Users } from 'lucide-react';

function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [waitlist, setWaitlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdTokenResult();
        if (token.claims.admin) {
          setIsAdmin(true);
          const q = query(collection(db, 'waitlist'), orderBy('timestamp', 'desc'));
          const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
            const entries = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setWaitlist(entries);
            setLoading(false);
          });
          return unsubscribeSnapshot;
        } else {
          navigate('/');
        }
      } else {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdTokenResult();
      if (!token.claims.admin) {
        throw new Error('Unauthorized');
      }
    } catch (err) {
      setError('Invalid credentials or unauthorized access');
    }
  };

  const handleExport = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      waitlist
        .map((entry) => `${entry.email},${entry.wallet},${entry.address},${new Date(entry.timestamp).toISOString()}`)
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'encrypted_waitlist.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredWaitlist = waitlist.filter(
    (entry) =>
      entry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.wallet?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.address?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-600 rounded-full animate-spin border-t-purple-500 mb-4 mx-auto"></div>
          <p className="text-purple-300">Loading secure dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
        <div className="max-w-md w-full glass-effect rounded-2xl p-8 neon-border">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 neon-glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-space-grotesk font-bold gradient-text">Secure Admin Access</h1>
            <div className="encryption-badge mt-4">
              <Lock className="w-3 h-3 mr-1" />
              E2E Encrypted Login
            </div>
          </div>
          
          {error && (
            <div className="glass-effect border-red-500/50 p-4 rounded-xl mb-6 bg-red-500/10">
              <p className="text-red-300 text-center">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-purple-300 mb-3">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full glass-effect rounded-xl px-4 py-3 text-white neon-border focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-300 mb-3">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full glass-effect rounded-xl px-4 py-3 text-white neon-border focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
                required
              />
            </div>
            <button type="submit" className="w-full btn btn-filled justify-center py-4">
              <Shield className="w-5 h-5" />
              Secure Login
              <Lock className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-3xl font-space-grotesk font-bold gradient-text mb-2">Secure Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="encryption-badge">
                <Shield className="w-4 h-4 mr-2" />
                Admin Access Encrypted
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Users className="w-4 h-4" />
                <span>{waitlist.length} entries</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate('/')} className="btn btn-outline">
              Back to Home
            </button>
            <button onClick={handleExport} className="btn btn-outline">
              <Download className="w-4 h-4" />
              Export Encrypted Data
            </button>
            <button onClick={() => auth.signOut()} className="btn btn-filled">
              <LogOut className="w-4 h-4" />
              Secure Sign Out
            </button>
          </div>
        </div>

        <div className="glass-effect rounded-2xl overflow-hidden neon-border">
          <div className="p-6 border-b border-purple-500/20">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search encrypted entries..."
                className="w-full glass-effect rounded-xl pl-12 pr-4 py-3 text-white neon-border focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-500/10 border-b border-purple-500/20">
                  <th className="px-6 py-4 text-left text-purple-300 font-space-grotesk">Email</th>
                  <th className="px-6 py-4 text-left text-purple-300 font-space-grotesk">Wallet</th>
                  <th className="px-6 py-4 text-left text-purple-300 font-space-grotesk">Address</th>
                  <th className="px-6 py-4 text-left text-purple-300 font-space-grotesk">Date</th>
                  <th className="px-6 py-4 text-left text-purple-300 font-space-grotesk">Security</th>
                </tr>
              </thead>
              <tbody>
                {filteredWaitlist.map((entry, index) => (
                  <tr key={entry.id} className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors">
                    <td className="px-6 py-4 text-gray-300">{entry.email}</td>
                    <td className="px-6 py-4 text-gray-300">{entry.wallet}</td>
                    <td className="px-6 py-4 text-gray-300 font-mono text-sm">
                      {entry.address ? `${entry.address.slice(0, 6)}...${entry.address.slice(-4)}` : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{new Date(entry.timestamp).toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <div className="encryption-badge">
                        <Eye className="w-3 h-3 mr-1" />
                        Encrypted
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;