import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap stil dosyasını dahil edelim

function UserCreatePage() {
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    password: "",
    role: "USER"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createUser = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/users/create", newUser);
      alert("Kullanıcı başarıyla eklendi!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Kullanıcı eklerken bir hata oluştu.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Kullanıcı Ekle</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="name">Ad</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Ad"
          value={newUser.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="password">Şifre</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Şifre"
          value={newUser.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="role">Rol</label>
        <select
          className="form-control"
          name="role"
          id="role"
          value={newUser.role}
          onChange={handleInputChange}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>

      <button className="btn btn-primary mt-3" onClick={createUser}>
        Kullanıcı Ekle
      </button>
    </div>
  );
}

export default UserCreatePage;
