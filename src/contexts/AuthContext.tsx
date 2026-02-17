import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../services/firebaseConfig';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  User,
  onIdTokenChanged,
} from 'firebase/auth';

export interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<User>;
  signInWithGithub: () => Promise<User>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    return user;
  };

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    return user;
  };

  const logout = async () => {
    setLoading(true);
    await auth.signOut();
    setCurrentUser(null);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      setLoading(true);
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading, signInWithGoogle, signInWithGithub, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
