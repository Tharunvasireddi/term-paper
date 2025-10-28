import { Outlet } from "@tanstack/react-router";

const LayoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

export default LayoutPage;
