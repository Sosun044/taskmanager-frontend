import React from "react";
import { Link } from "react-router-dom";

function UserPage() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">👤 Kullanıcı İşlemleri</h2>
      <div className="d-grid gap-3 col-6 mx-auto">
        <Link to="/user/create" className="btn btn-primary">
          Kullanıcı Ekle
        </Link>
        <Link to="/user/list" className="btn btn-secondary">
          Kullanıcıları Listele
        </Link>        
      </div>
    </div>
  );
}

export default UserPage;
