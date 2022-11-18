import About from "../pages/About";
import { Contacts } from "../pages/Contacts";
import Main from "../pages/Main";

export const ROUTES = [
  {
    path: "/",
    component: <Main />,
  },
  {
    path: "/contacts",
    component: <Contacts />,
  },
  {
    path: "/about",
    component: <About />,
  },
];
