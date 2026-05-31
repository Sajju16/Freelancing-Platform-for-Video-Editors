import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import ClientDashboard from './pages/ClientDashboard';
import EditorDashboard from './pages/EditorDashboard';

function App() {
  const [userRole, setUserRole] = useState(null); // 'client' or 'editor'

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar userRole={userRole} setUserRole={setUserRole} />
        
        <div className="flex">
          {userRole && <Sidebar userRole={userRole} />}
          
          <div className={`flex-1 ${userRole ? 'ml-0 lg:ml-64' : ''}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup setUserRole={setUserRole} />} />
              <Route 
                path="/client-dashboard" 
                element={userRole === 'client' ? <ClientDashboard /> : <Navigate to="/signup" />} 
              />
              <Route 
                path="/editor-dashboard" 
                element={userRole === 'editor' ? <EditorDashboard /> : <Navigate to="/signup" />} 
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;