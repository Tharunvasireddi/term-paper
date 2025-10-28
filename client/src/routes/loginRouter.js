import { createRoute, redirect } from "@tanstack/react-router";
import   rootRoute  from "./rootRoute";
import LoginComponent from "../Componets/Login";
export const loginRegister = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  beforeLoad: () => {
    // Redirect to notes if already authenticated
    const token = localStorage.getItem("token");
    if (token) {
      throw redirect({ to: "/notes" });
    }
  },
  component: LoginComponent,
});


