import React, { useState, useEffect } from "react";
import axios from "axios";

function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Kullanıcıları listeleme
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users/list");
        setUsers(response.data);
      } catch (error) {
        console.error("Kullanıcılar yüklenirken hata oluştu:", error);
        alert("Kullanıcıları yüklerken bir hata oluştu.");
      }
    };

    fetchUsers();
  }, []);

  // Kullanıcı silme fonksiyonu
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/delete/${id}`);
      alert("Kullanıcı başarıyla silindi!");
      setUsers(users.filter((user) => user.id !== id)); // Silinen kullanıcıyı listeden kaldır
    } catch (error) {
      console.error("Kullanıcı silinirken hata oluştu:", error);
      alert("Kullanıcı silinirken bir hata oluştu.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">👥 Kullanıcılar Listesi</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Ad</th>
            <th>Email</th>
            <th>Rol</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button 
                  onClick={() => window.location.href = `/user/update/${user.id}`}
                  className="btn btn-warning me-2"
                >
                  Güncelle
                </button>
                <button 
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
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

export default UserListPage;
