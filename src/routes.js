import LearnTheClock from "./components/clock/Learn.vue";
import TestYourselfTheClock from "./components/clock/TestYourself.vue";
import Home from "./components/Home";

export const routes = [
  {path: "", component: Home},
  {path: "/lær/klokka", component: LearnTheClock},
  {path: "/testdegselv/klokka", component: TestYourselfTheClock}
];




