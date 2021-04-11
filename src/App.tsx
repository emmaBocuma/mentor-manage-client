import { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import { Route, Redirect, RouteProps, Switch } from 'react-router-dom';
import { auth } from './auth';
import SignUpPage from './pages/SignUpPage';
import UserListPage from './pages/UserListPage';
import SignInPage from './pages/SignInPage';
import DashboardPage from './pages/DashboardPage';
import PublicHomePage from './pages/PublicHomePage';
interface AuthUser {
  uid: string;
  email: string | null;
}

export const AuthContext = createContext<AuthUser | null>(null);
interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

const App = () => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...otherProps } = props;
    return (
      <Route
        {...otherProps}
        render={() => {
          return currentUser ? <Component /> : <PublicHomePage />;
        }}
      />
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('onAuthStateChanged', user);
      setCurrentUser(user ? { uid: user.uid, email: user.email } : null);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={PublicHomePage} />
          <Route
            path="/signup"
            component={currentUser ? DashboardPage : SignUpPage}
          />
          <Route
            path="/signin"
            component={currentUser ? DashboardPage : SignInPage}
          />
          <PrivateRoute path="/users" component={UserListPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
