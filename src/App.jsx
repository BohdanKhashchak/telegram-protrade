import React from "react";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import WelcomeFirstPage from "./pages/welcome-first-page/WelcomeFirstPage";
import WelcomeSecondPage from "./pages/welcome-second-page/WelcomeSecondPage";
import RegistrationPage from "./pages/registration/Registration";
import RegistrationSuccessPage from "./pages/register-success/RegistrationSuccessPage";

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  path: "/",
  component: HomePage,
  getParentRoute: () => rootRoute,
});

const welcomeFirstPageRoute = createRoute({
  path: "/welcome-first",
  component: WelcomeFirstPage,
  getParentRoute: () => rootRoute,
});

const welcomeSecondPageRoute = createRoute({
  path: "/welcome-second",
  component: WelcomeSecondPage,
  getParentRoute: () => rootRoute,
});

const RegistrationPageRoute = createRoute({
  path: "/registration",
  component: RegistrationPage,
  getParentRoute: () => rootRoute,
});

const RegistrationSuccessPageRoute = createRoute({
  path: "/registration-success",
  component: RegistrationSuccessPage,
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  welcomeFirstPageRoute,
  welcomeSecondPageRoute,
  RegistrationPageRoute,
  RegistrationSuccessPageRoute,
]);

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
