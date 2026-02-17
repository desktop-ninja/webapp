import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const ProtectedRoute: React.FC = () => {
  const { currentUser, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950">
        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (currentUser) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
