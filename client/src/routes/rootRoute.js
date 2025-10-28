import { createRootRoute, Outlet } from "@tanstack/react-router";
import { registerRoute } from "./registerRouter";
import { loginRegister } from "./loginRouter";
import { notesRegister } from "./addNoteRouter";
import LayoutPage from "../pages/LayoutPage";
import homepageRouter from "./homeRouter";

const rootRoute = createRootRoute({
  component:  LayoutPage,
});

export default rootRoute;

export const routeTree = rootRoute.addChildren([
  registerRoute,
  loginRegister,
  notesRegister,
  homepageRouter,
]);
