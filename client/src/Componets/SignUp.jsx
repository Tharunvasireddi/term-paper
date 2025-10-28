import { useNavigate } from "@tanstack/react-router";
import Signup from "../pages/Signup";
import Navbar from "../components/Navbar";

function SignupComponent() {
  const navigate = useNavigate();

  const handleSignup = (token, user) => {
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
            Create Account
          </h1>
          <p className="text-gray-600">
            Join us to start organizing your thoughts securely
          </p>
        </div>
        <Signup onSignup={handleSignup} />
      </div>
    </div>
  );
}

export default SignupComponent;
