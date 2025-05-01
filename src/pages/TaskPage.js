import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'TODO',
    assignedTo: '',
    taskPriority: 'LOW',
    dueDate: '',
    category: '',
    estimatedTime: 1,
    isCompleted: false,
    email: '',
    userId: ''
  });

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:8080/api/tasks/list');
    setTasks(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/tasks/create', form);
    setForm({
      title: '',
      description: '',
      status: 'TODO',
      assignedTo: '',
      taskPriority: 'LOW',
      dueDate: '',
      category: '',
      estimatedTime: 1,
      isCompleted: false,
      email: '',
      userId: ''
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Assigned To" value={form.assignedTo} onChange={e => setForm({ ...form, assignedTo: e.target.value })} />
        <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="User ID" value={form.userId} onChange={e => setForm({ ...form, userId: e.target.value })} />
        <input type="datetime-local" value={form.dueDate} onChange={e => setForm({ ...form, dueDate: e.target.value })} />
        <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
        <input type="number" placeholder="Estimated Time" value={form.estimatedTime} onChange={e => setForm({ ...form, estimatedTime: Number(e.target.value) })} />
        <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="DONE">DONE</option>
        </select>
        <select value={form.taskPriority} onChange={e => setForm({ ...form, taskPriority: e.target.value })}>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>
        <label>
          Completed:
          <input type="checkbox" checked={form.isCompleted} onChange={e => setForm({ ...form, isCompleted: e.target.checked })} />
        </label>
        <button type="submit">Create Task</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.status} - {task.assignedTo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;
