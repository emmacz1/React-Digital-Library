import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

interface Props {
  children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          signInWithPopup(auth, Providers.google).catch((error) => {
            console.error("Auth error: ", error);
          });
        }
      });
    };

    checkAuth();
  }, [navigate]);

  return <>{children}</>;
};

export default AuthChecker;
