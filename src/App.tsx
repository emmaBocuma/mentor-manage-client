import { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import { auth } from './auth';
import SignupPage from './pages/SignUpPage';
import UserListPage from './pages/UserListPage';

interface AuthUser {
  uid: string;
  email: string | null;
}

export const AuthContext = createContext<AuthUser | null>(null);

const App = () => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user ? { uid: user.uid, email: user.email } : null);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      <div className="container">
        <Header />
        <Route path="/signup" component={SignupPage} />
        <Route path="/users" component={UserListPage} />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
