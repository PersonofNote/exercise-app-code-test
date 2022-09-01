import { useState, useEffect } from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import OnBoarding from './components/Onboarding';

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (user) {
     setUser(userData);
    }
  }, [user]);

  return (
    <div className="App">
      <nav>
        Placeholder
      </nav>
      {user === null ? <OnBoarding /> : <Dashboard /> }
    </div>
  );
}

export default App;
