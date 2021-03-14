import Header from './components/Header';
import { Route } from 'react-router-dom';
import SignupPage from './pages/SignUpPage';
import UserListPage from './pages/UserListPage';

function App() {
  return (
    <div className="container">
      <Header />
      <Route path="/signup" component={SignupPage} />
      <Route path="/users" component={UserListPage} />
    </div>
  );
}

export default App;
