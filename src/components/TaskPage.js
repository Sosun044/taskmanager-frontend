import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap stil dosyasını dahil edelim

function TaskPage() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Task İşlemleri</h2>
      <div className="d-grid gap-2">
        <Link to="/task/create">
          <button className="btn btn-success">Yeni Task Ekle</button>
        </Link>
        <br />
        <Link to="/task/list">
          <button className="btn btn-primary">Taskları Listele</button>
        </Link>
      </div>
    </div>
  );
}

export default TaskPage;
