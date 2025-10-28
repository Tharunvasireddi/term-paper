import { createRoute } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import HomePage from "../pages/Homepage";

const homepageRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

export default homepageRouter;
