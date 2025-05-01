import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserPage from './pages/UserPage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          <Link to="/users" style={{ marginRight: '10px' }}>Users</Link>
          <Link to="/tasks">Tasks</Link>
        </nav>
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
