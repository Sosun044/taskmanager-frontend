import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function TaskUpdatePage() {
  const { id } = useParams();  // Burada doğru id'yi alıyoruz
  const navigate = useNavigate();

  // ID'nin doğru şekilde alındığından emin olalım
  useEffect(() => {
    if (!id) {
      alert("Geçersiz ID!");
      navigate("/task/list");  // Geçersiz ID varsa listeye geri yönlendir
      return;
    }

    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/tasks/list/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error("Görev alınırken hata oluştu:", error);
        alert("Görev alınırken bir hata oluştu.");
      }
    };

    fetchTask();
  }, [id, navigate]);

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

    const taskToUpdate = {
      ...task,
      dueDate: dueDateFixed,
    };

    try {
      await axios.put(`http://localhost:8080/api/tasks/update/${id}`, taskToUpdate);
      alert("Görev başarıyla güncellendi!");
      navigate("/task/list");
    } catch (error) {
      console.error("Görev güncellenirken hata oluştu:", error.response ? error.response.data : error.message);
      alert("Görev güncellenirken bir hata oluştu.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Görev Güncelle</h2>
      <form onSubmit={handleSubmit} className="form">
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
        <label>
          <input
            type="checkbox"
            name="isCompleted"
            checked={task.isCompleted}
            onChange={handleChange}
          />
          Tamamlandı mı?
        </label>

        <button type="submit" className="btn btn-success mt-3">
          Güncelle
        </button>
      </form>
    </div>
  );
}

export default TaskUpdatePage;
