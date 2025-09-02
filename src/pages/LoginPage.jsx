import { useState } from "react"
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const API_URL = "http://localhost:4000";

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    authService.login(email, password).then(
      () => {
        navigate("/home");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Entrar
          </button>
          {message && (
            <div className="mt-4 text-center text-red-500">{message}</div>
          )}
        </form>

        <div className="my-6 text-center text-gray-500">O</div>

        <div className="flex flex-col space-y-4">
          <a
            href={`${API_URL}/auth/google`}
            className="flex items-center justify-center bg-red-400 text-white py-2 rounded hover:bg-red-600"
          >
            <span className="mr-2"><img src="/public/images/Google.png" alt="Google"
            className="w-13 h-13 mr-30"
            /></span> Iniciar con Google
          </a>
          <a
            href={`${API_URL}/auth/github`}
            className="flex items-center justify-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
          >
            <span className="mr-2"><img src="/public/images/GitHub1.png" alt="GitHub" className="w-10 h-10 mr-30"/></span> Iniciar con GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage