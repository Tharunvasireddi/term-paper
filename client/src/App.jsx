import React, { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  function handleLogin(tkn, userObj) {
    setToken(tkn);
    setUser(userObj);
    localStorage.setItem("token", tkn);
    localStorage.setItem("user", JSON.stringify(userObj));
  }

  function handleLogout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
        <header className="backdrop-blur-md bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-6 mb-8 flex items-center justify-between sticky top-4 z-10 transition-all duration-300">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text animate-gradient">
            Secure Notes
          </h1>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  Welcome back,{" "}
                  <span className="font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                    {user.name}
                  </span>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-medium transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
                >
                  Logout
                </button>
              </>
            ) : null}
            <DarkModeToggle />
          </div>
        </header>

        <main className="relative animate-slide-up">
          {!token ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <Login onLogin={handleLogin} />
              </div>
              <div className="group p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <Signup onSignup={handleLogin} />
              </div>
            </div>
          ) : (
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
              <Notes token={token} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
