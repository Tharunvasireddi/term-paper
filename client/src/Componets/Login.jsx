import { useNavigate } from "@tanstack/react-router";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";

function LoginComponent() {
  const navigate = useNavigate();
  const handleLogin = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    navigate({ to: "/notes" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      <div className="max-w-md mx-auto pt-20 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to access your secure notes</p>
        </div>
        <Login onLogin={handleLogin} />
      </div>
    </div>
  );
}

export default LoginComponent;
