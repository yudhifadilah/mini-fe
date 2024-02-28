import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import StepForm from './components/StepForm';
import { TokenProvider } from './components/TokenContext';

function App() {
  return (
    <TokenProvider> {/* Letakkan TokenProvider di atas Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/stepForm" element={<StepForm />} />
        </Routes>
      </Router>
    </TokenProvider>
  );
}

export default App;
