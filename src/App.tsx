import Header from './components/Header';
import { Route } from 'react-router-dom';
import SignupPage from './pages/SignUpPage';

function App() {
  return (
    <div className="container">
      <Header />
      <Route path="/signup" component={SignupPage} />
    </div>
  );
}

export default App;
