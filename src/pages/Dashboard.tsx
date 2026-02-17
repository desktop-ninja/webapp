import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const Dashboard: React.FC = () => {
  const { currentUser, logout } = useAuthContext();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🥷</span>
            <h1 className="text-2xl font-bold">Desktop Ninja</h1>
          </div>
          <button
            onClick={logout}
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Sign out
          </button>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-6">
          <p className="text-slate-400 text-sm mb-1">Welcome back</p>
          <p className="text-xl font-semibold">{currentUser?.displayName || currentUser?.email}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-emerald-400">—</p>
            <p className="text-slate-400 text-sm mt-1">Ninja Score</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-emerald-400">—</p>
            <p className="text-slate-400 text-sm mt-1">Keyboard %</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-emerald-400">—</p>
            <p className="text-slate-400 text-sm mt-1">Rank</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Get Started</h2>
          <p className="text-slate-400">
            Download the Desktop Ninja agent to start tracking your keyboard mastery.
            Your stats will appear here once the agent is running.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
