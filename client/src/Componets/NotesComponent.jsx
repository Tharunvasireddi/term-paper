import { useNavigate } from "@tanstack/react-router";
import Notes from "../pages/Notes";
import Navbar from "../components/Navbar";

function NotesComponent() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // If no token, redirect to login
  if (!token) {
    navigate({ to: "/login" });
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Notes token={token} />
      </div>
    </div>
  );
}

export default NotesComponent;
