import React, { useState } from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Notes from './pages/Notes';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));

  function handleLogin(tkn, userObj) {
    setToken(tkn);
    setUser(userObj);
    localStorage.setItem('token', tkn);
    localStorage.setItem('user', JSON.stringify(userObj));
  }

  function handleLogout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">Secure Notes</h1>
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-slate-600">Hi, <span className="font-medium">{user.name}</span></span>
                <button className="px-3 py-1 rounded bg-red-500 text-white text-sm" onClick={handleLogout}>Logout</button>
              </>
            ) : null}
          </div>
        </header>

        <main>
          {!token && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Login onLogin={handleLogin} />
              <Signup onSignup={handleLogin} />
            </div>
          )}
          {token && <Notes token={token} />}
        </main>
      </div>
    </div>
  );
}
