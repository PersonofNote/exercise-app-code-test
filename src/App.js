import { useState, useEffect, useCallback } from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import OnBoarding from './components/Onboarding';

function App() {

  const [user, setUser] = useState([]);

  const handleUser = useCallback(userData => {
    setUser(userData)
  },[])

  useEffect(() => {
    const userData = localStorage.getItem('user');
    // IF BACKEND, we would have a username and password to compare against the db,
    // or a jwt token to reconfirm that the logged-in user is valid
    // And would use a more complex state object to avoid multiple renders
    /*
      fetch(backendUrl)
        .then(response => response.json())
        .then(data => setUser(userData));
    */
    if (user) {
     handleUser(JSON.parse(userData));
    }
  }, [handleUser]);

  return (
    <div className="App">
      {user === null || user.length === 0 ? <OnBoarding handleUser={handleUser} /> : <Dashboard userData={user} handleUser={handleUser} /> }
    </div>
  );
}

export default App;
