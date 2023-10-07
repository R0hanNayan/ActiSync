import React, {useState, useEffect} from 'react';
import Login from './scenes/login/Login';
import Register from './scenes/register/Register';
import Homepage from './scenes/homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setLoggedUser] = useState({}); 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path='/' 
            element={
              <Login /*setLoggedUser={setLoggedUser}*/ />
            }
          />
          <Route exact path='/auth' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
