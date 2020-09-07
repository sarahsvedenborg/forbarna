import LearnTheClock from "./components/clock/Learn.vue";
import TestYourselfTheClock from "./components/clock/TestYourself.vue";
import Home from "./components/Home";
import Board from "./components/memo/board.vue"
import CatchBoard from "./components/catch/board.vue"
import Chaos from "./components/chaos/chaos.vue"
import Admin from "./components/Admin.vue"
import Setup from "./components/ShoppingList/Setup.vue"
import Bursdag from "./components/Bursdag.vue"
import About from "./components/About.vue"
import Contact from "./components/Contact.vue"

export const routes = [
  {path: "", component: Home},
  {path: "/lær/klokka", component: LearnTheClock},
  {path: "/testdegselv/klokka", component: TestYourselfTheClock},
  {path: "/memory", component: Board},
  {path: "/catch", component: CatchBoard},
  {path: "/chaos", component: Chaos},
  {path: "/admin", component: Admin},
  {path: "/shoppingList", component: Setup},
  {path: "/morten65", component: Bursdag},
  {path: "/om-oss", component: About},
  {path: "/kontakt", component: Contact}
];




