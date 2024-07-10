import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AccessLogin from './pages/Auth/AccessLogin';
import SignIn from './pages/Auth/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/access-login" element={<AccessLogin />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
