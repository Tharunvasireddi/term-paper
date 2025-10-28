import { createRoute, redirect } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import NotesComponent from "../Componets/NotesComponent";
export const notesRegister = createRoute({
  getParentRoute: () => rootRoute,
  path: "/notes",
  beforeLoad: () => {
    // Redirect to login if not authenticated
    const token = localStorage.getItem("token");
    if (!token) {
      throw redirect({ to: "/login" });
    }
  },
  component: NotesComponent,
});
