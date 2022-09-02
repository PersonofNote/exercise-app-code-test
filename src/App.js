import { useState, useEffect } from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import OnBoarding from './components/Onboarding';

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (user) {
     setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="App">
      <nav>
        Placeholder
      </nav>
      {user === null ? <OnBoarding /> : <Dashboard userData={user} /> }
    </div>
  );
}

export default App;
