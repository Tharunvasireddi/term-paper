import { createRoute, redirect } from "@tanstack/react-router";
import   rootRoute  from "./rootRoute";
import SignupComponent from "../Componets/SignUp";
export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  beforeLoad: () => {
    const token = localStorage.getItem("token");
    if (token) {
      throw redirect({ to: "/notes" });
    }
  },
  component: SignupComponent,
});


