import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UserUpdatePage() {
  const { userId } = useParams(); // id parametresi alındı
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "" });
  const [loading, setLoading] = useState(true); // Yükleniyor durumu
  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa ilk yüklendiğinde mevcut kullanıcıyı API üzerinden çekiyoruz
    axios.get(`http://localhost:8080/api/users/list/${userId}`)
      .then(response => {
        setUser(response.data); // Veriyi alıp formu dolduruyoruz
        setLoading(false); // Veriler yüklendiğinde loading'i false yap
      })
      .catch(error => {
        console.error("Error fetching user:", error);
        alert("Kullanıcı bilgileri alınırken hata oluştu.");
        setLoading(false); // Yüklenme hatası olsa da loading'i false yap
      });
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Veri doğrulama
    if (!user.name || !user.email || !user.password || !user.role) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    axios.put(`http://localhost:8080/api/users/update/${userId}`, user)
      .then(() => {
        alert("Kullanıcı başarıyla güncellendi!");
        navigate("/user/list"); // Güncelleme sonrası listeleme sayfasına yönlendir
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        alert("Kullanıcı güncellenirken hata oluştu.");
      });
  };

  // Yükleniyor durumu kontrolü
  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h2>Kullanıcı Güncelle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <select
          name="role"
          value={user.role}
          onChange={handleChange}
        >
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
        <button type="submit">Kullanıcıyı Güncelle</button>
      </form>
    </div>
  );
}

export default UserUpdatePage;
