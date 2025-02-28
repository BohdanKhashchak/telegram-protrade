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
import MainPage from "./pages/main-page/MainPage";
import CheckSignUpPage from "./pages/check-signup/CheckSignUpPage";
import MaterialsPage from "./pages/materials/Materials";
import LessonPage from "./pages/lesson/Lesson";
import TestPage from "./pages/test/Test";

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

const MainPageRoute = createRoute({
  path: "/main",
  component: MainPage,
  getParentRoute: () => rootRoute,
});

const CheckSignUpPageRoute = createRoute({
  path: "/check-sign-up",
  component: CheckSignUpPage,
  getParentRoute: () => rootRoute,
});

const MaterialsPageRoute = createRoute({
  path: "/materials",
  component: MaterialsPage,
  getParentRoute: () => rootRoute,
});

const LessonPageRoute = createRoute({
  path: "/lesson",
  component: LessonPage,
  getParentRoute: () => rootRoute,
});

const TestPageRoute = createRoute({
  path: "/test",
  component: TestPage,
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  welcomeFirstPageRoute,
  welcomeSecondPageRoute,
  RegistrationPageRoute,
  MainPageRoute,
  CheckSignUpPageRoute,
  MaterialsPageRoute,
  LessonPageRoute,
  TestPageRoute,
]);

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
