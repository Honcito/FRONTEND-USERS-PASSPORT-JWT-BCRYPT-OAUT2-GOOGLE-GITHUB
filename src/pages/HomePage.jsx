import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";


const HomePage = () => {

  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () =>{
    authService.logout();
    navigate('/login');
    window.location.reload();
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
        <div className="p-8 bg-white rounded shadow-md w-full max-w-md text-center">
          {currentUser ? (
            <>
              <h2 className="text-2xl font-bold mb-4">¡Bienvenido!</h2>
              <p className="text-gray-700">Has accedido a la página principal.</p>
              {/* {currentUser.user && (
                <p className="text-gray-700">
                  Tu correo es: {currentUser.email}
                </p>
              )} */}
              <button 
                onClick={handleLogout}
                className="mt-6 bg-red-500 text-white py-2 px-4 round
                 hover:bg-red-600"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <h2 className="text-2xl font-bold">Cargando...</h2>
          )
        }
        </div>
      </div>
    </>
  )
}

export default HomePage