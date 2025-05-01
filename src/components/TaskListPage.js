import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskListPage() {
  const userId = localStorage.getItem("userId");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/tasks/list`);
        setTasks(response.data);
      } catch (error) {
        console.error("Görevler yüklenirken hata oluştu:", error);
        alert("Görevler yüklenirken bir hata oluştu.");
      }
    };

    fetchTasks();
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/delete/${id}`);
      alert("Görev başarıyla silindi!");
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Görev silinirken hata oluştu:", error);
      alert("Görev silinirken bir hata oluştu.");
    }
  };

  const handleUpdate = (id) => {
    window.location.href = `/task/update/${id}`;  
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Görevlerim</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Başlık</th>
            <th>Açıklama</th>
            <th>Durum</th>
            <th>Atanan Kişi</th>
            <th>Öncelik</th>
            <th>Bitiş Tarihi</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{task.assignedTo}</td>
              <td>{task.taskPriority}</td>
              <td>{new Date(task.dueDate).toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleUpdate(task.id)}
                >
                  Güncelle
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(task.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskListPage;
