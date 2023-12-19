import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./assets/template_assets/css/color.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/style.css";
import "./assets/styles/custom.css";

//Importing pages
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
//Importing Components
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/Login" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
