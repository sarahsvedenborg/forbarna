import LearnTheClock from "./components/clock/Learn.vue";
import TestYourselfTheClock from "./components/clock/TestYourself.vue";
import Home from "./components/Home";
import Board from "./components/memo/board.vue"
import Admin from "./components/Admin.vue"
import Setup from "./components/ShoppingList/Setup.vue"
import Bursdag from "./components/Bursdag.vue"

export const routes = [
  {path: "", component: Home},
  {path: "/lær/klokka", component: LearnTheClock},
  {path: "/testdegselv/klokka", component: TestYourselfTheClock},
  {path: "/memory", component: Board},
  {path: "/admin", component: Admin},
  {path: "/shoppingList", component: Setup},
  {path: "/morten65", component: Bursdag}
];




