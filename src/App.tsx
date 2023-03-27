import { Route, Routes } from "react-router-dom";
import { FooterSimple } from "./components/Footer";
import { HeaderResponsive } from "./components/Header";
import { ROUTES } from "./consts/routes";

function App() {
  return (
    <div className="App">
      <HeaderResponsive />
      <div className="mainContent">
        <Routes>
          {ROUTES.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
      <FooterSimple />
    </div>
  );
}

export default App;
