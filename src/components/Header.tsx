import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-light bg-light justify-content-between px-4">
      <h3 className="m-0">Lista de Posts</h3>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </nav>
  );
}
