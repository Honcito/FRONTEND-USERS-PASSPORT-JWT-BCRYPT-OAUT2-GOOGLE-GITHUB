import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center"></nav>
        <Link to="/" className="text-xl font-bold text-gray-800">
          My App
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Registro
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;