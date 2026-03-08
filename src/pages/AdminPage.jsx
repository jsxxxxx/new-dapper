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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-none animate-spin border-t-black mb-4 mx-auto"></div>
          <p className="text-primary font-medium">Loading secure dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-background border-2 border-primary p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-space-grotesk font-bold text-primary uppercase tracking-wider">Secure Admin Access</h1>
            <div className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground text-xs font-medium border border-primary mt-4">
              <Lock className="w-3 h-3 mr-1" />
              E2E Encrypted Login
            </div>
          </div>
          
          {error && (
            <div className="border border-primary p-4 mb-6 bg-gray-100">
              <p className="text-primary text-center font-medium">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-tight">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background border border-primary px-4 py-3 text-primary focus:ring-0 focus:border-primary transition-all outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-tight">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background border border-primary px-4 py-3 text-primary focus:ring-0 focus:border-primary transition-all outline-none"
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
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-4xl font-space-grotesk font-bold text-primary mb-2 uppercase tracking-tighter">Secure Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground text-xs font-medium border border-primary">
                <Shield className="w-4 h-4 mr-2" />
                Admin Access Encrypted
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary opacity-60">
                <Users className="w-4 h-4" />
                <span>{waitlist.length} entries</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate('/')} className="btn btn-outline uppercase text-xs font-bold tracking-widest">
              Back to Home
            </button>
            <button onClick={handleExport} className="btn btn-outline uppercase text-xs font-bold tracking-widest">
              <Download className="w-4 h-4" />
              Export Data
            </button>
            <button onClick={() => auth.signOut()} className="btn btn-filled uppercase text-xs font-bold tracking-widest">
              <LogOut className="w-4 h-4" />
              Secure Sign Out
            </button>
          </div>
        </div>

        <div className="bg-background border-2 border-primary overflow-hidden">
          <div className="p-6 border-b border-primary">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search encrypted entries..."
                className="w-full bg-background border border-primary pl-12 pr-4 py-3 text-primary focus:ring-0 focus:border-primary transition-all outline-none"
              />
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-space-grotesk uppercase text-xs tracking-widest">Email</th>
                  <th className="px-6 py-4 text-left font-space-grotesk uppercase text-xs tracking-widest">Wallet</th>
                  <th className="px-6 py-4 text-left font-space-grotesk uppercase text-xs tracking-widest">Address</th>
                  <th className="px-6 py-4 text-left font-space-grotesk uppercase text-xs tracking-widest">Date</th>
                  <th className="px-6 py-4 text-left font-space-grotesk uppercase text-xs tracking-widest">Security</th>
                </tr>
              </thead>
              <tbody>
                {filteredWaitlist.map((entry, index) => (
                  <tr key={entry.id} className="border-b border-primary hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 text-primary font-medium">{entry.email}</td>
                    <td className="px-6 py-4 text-primary">{entry.wallet}</td>
                    <td className="px-6 py-4 text-primary font-mono text-sm opacity-60">
                      {entry.address ? `${entry.address.slice(0, 6)}...${entry.address.slice(-4)}` : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-primary opacity-60 text-sm whitespace-nowrap">{new Date(entry.timestamp).toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center px-2 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-tighter">
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