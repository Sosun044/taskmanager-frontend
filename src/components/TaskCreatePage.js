import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskCreatePage() {
  const navigate = useNavigate();
  const storedUserId = localStorage.getItem("userId", "2");
  const initialUserId = storedUserId ? Number(storedUserId) : null;

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "IN_PROGRESS",
    assignedTo: "",
    taskPriority: "HIGH",
    dueDate: "",
    category: "",
    estimatedTime: 1,
    isCompleted: false,
    email: "",
    userId: initialUserId,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let dueDateFixed = task.dueDate;
    if (dueDateFixed && dueDateFixed.length === 16) {
      dueDateFixed += ":00";
    }

    const taskToSend = {
      ...task,
      dueDate: dueDateFixed,
      userId: Number(task.userId),
    };

    try {
      await axios.post("http://localhost:8080/api/tasks/create", taskToSend);
      alert("Görev başarıyla oluşturuldu!");
      navigate("/task/list");
    } catch (error) {
      console.error("Görev oluşturulurken hata oluştu:", error.response ? error.response.data : error.message);
      alert("Görev oluşturulurken bir hata oluştu.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Yeni Görev Oluştur</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Başlık"
          value={task.title}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <textarea
          name="description"
          placeholder="Açıklama"
          value={task.description}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          required
          className="form-control mb-3"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
          <option value="Canceled">Canceled</option>
        </select>

        <input
          type="text"
          name="assignedTo"
          placeholder="Atanan Kişi"
          value={task.assignedTo}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <select
          name="taskPriority"
          value={task.taskPriority}
          onChange={handleChange}
          required
          className="form-control mb-3"
        >
          <option value="LOW">Düşük</option>
          <option value="MEDIUM">Orta</option>
          <option value="HIGH">Yüksek</option>
        </select>

        <input
          type="datetime-local"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="category"
          placeholder="Kategori"
          value={task.category}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <input
          type="number"
          name="estimatedTime"
          placeholder="Tahmini Süre (saat)"
          value={task.estimatedTime}
          onChange={handleChange}
          min="1"
          className="form-control mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={task.email}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="number"
          name="userId"
          placeholder="Kullanıcı ID"
          value={task.userId}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />

        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="isCompleted"
            checked={task.isCompleted}
            onChange={handleChange}
            className="form-check-input"
          />
          <label className="form-check-label">Tamamlandı mı?</label>
        </div>

        <button type="submit" className="btn btn-success">
          Görev Oluştur
        </button>
      </form>
    </div>
  );
}

export default TaskCreatePage;
