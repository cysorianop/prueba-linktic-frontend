import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) navigate("/posts");
    else setError("Credenciales incorrectas");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded bg-white shadow-sm"
        style={{ minWidth: "320px" }}
      >
        <h2 className="mb-4 text-center">Iniciar Sesión</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <p className="text-danger text-center mt-2" data-testid="error-msg">
            {error}
          </p>
        )}
        <button className="btn btn-primary w-100">Ingresar</button>
      </form>
    </div>
  );
}
