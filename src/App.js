import React, { useState } from 'react';
import Login from './Login';
import Termek from './Termek';

function App() {
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <div>
      <Login onLogin={handleLogin}/>
      
      {token && <Termek token={token}/>}
    </div>
  );
}

export default App;
