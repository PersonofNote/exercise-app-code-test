import { useState, useEffect } from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import OnBoarding from './components/Onboarding';

function App() {

  const [user, setUser] = useState([]);

  const handleUser = (userData) => {
    setUser(userData)
  }

  useEffect(() => {
    const userData = localStorage.getItem('user');
    console.log(user)
    if (user) {
     handleUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="App">
      {user === null || user.length === 0 ? <OnBoarding /> : <Dashboard userData={user} handleUser={handleUser} /> }
    </div>
  );
}

export default App;
