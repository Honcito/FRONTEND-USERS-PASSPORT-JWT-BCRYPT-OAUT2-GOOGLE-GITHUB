import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthRedirectHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Extrae los parámetros 'token' y 'user' de la URL
    const token = searchParams.get("token");
    const user = searchParams.get("user");

    if (token && user) {
      try {
        // Decodifica y parsea los datos del usuario
        const userData = JSON.parse(decodeURIComponent(user));

        // Crea el objeto de sesión para guardar en el localStorage
        const sessionData = {
          token,
          user: {
            id: userData.id,
            email: userData.email,
          },
        };

        // Guarda los datos en el almacenamiento local
        localStorage.setItem("user", JSON.stringify(sessionData));

        // Redirige a la página principal
        navigate("/home", { replace: true });
      } catch (e) {
        console.error("Error al procesar los datos de la URL:", e);
        // Si hay un error, redirige al login
        navigate("/login", { replace: true });
      }
    } else {
      // Si no se encuentran el token o los datos del usuario, redirige al login
      navigate("/login", { replace: true });
    }
  }, [navigate, searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <h2 className="text-2xl font-bold">Redirigiendo...</h2>
    </div>
  );
};

export default AuthRedirectHandler;
