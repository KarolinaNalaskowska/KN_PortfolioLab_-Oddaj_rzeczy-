import "./scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Register from "./components/register/Register";
import GiveStuff from "./components/giveStuff/GiveStuff";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
              <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
              <Route path="/logout" element={<Logout />} />
          </Routes>
          <Routes>
              <Route path="/register" element={<Register />} />
          </Routes>
          <Routes>
              <Route path="/givestuff" element={<GiveStuff />} />
          </Routes>
      </BrowserRouter>
  );
}