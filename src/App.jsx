import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AccessLogin from './pages/Auth/AccessLogin';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import PasswordRecovery from './pages/Auth/PasswordRecovery';
import VerificationKey from './pages/Auth/VerificationKey';
import ResetPassword from './pages/Auth/ResetPassword';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/access-login" element={<AccessLogin />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/verification-key" element={<VerificationKey />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
