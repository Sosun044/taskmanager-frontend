import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserPage from "./components/UserPage";
import TaskPage from "./components/TaskPage";
import UserCreatePage from "./components/UserCreatePage";
import UserListPage from "./components/UserListPage";
import UserUpdatePage from "./components/UserUpdatePage";
import UserDeletePage from "./components/UserDeletePage";
import TaskListPage from "./components/TaskListPage";
import TaskCreatePage from "./components/TaskCreatePage";
import TaskUpdatePage from "./components/TaskUpdatePage";
import TaskDeletePage from "./components/TaskDeletePage";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h2 className="mb-4">🎯 Görev Yönetim Sistemine Hoş Geldiniz</h2>
                <div className="card shadow-sm p-4">
                  <div className="d-grid gap-3 col-6 mx-auto">
                    <Link to="/user" className="btn btn-primary">
                      👤 Kullanıcı İşlemleri
                    </Link>
                    <Link to="/task" className="btn btn-success">
                      📋 Görev İşlemleri
                    </Link>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/create" element={<UserCreatePage />} />
          <Route path="/user/list" element={<UserListPage />} />
          <Route path="/user/update/:userId" element={<UserUpdatePage />} />
          <Route path="/user/delete" element={<UserDeletePage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/task/list" element={<TaskListPage />} />
          <Route path="/task/create" element={<TaskCreatePage />} />
          <Route path="/task/update/:id" element={<TaskUpdatePage />} />
          <Route path="/task/delete/:taskId" element={<TaskDeletePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
