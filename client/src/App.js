import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/login";
import { SidebarProvider } from "./components/context/drawerContext";
import "./index.css";
import Register from "./components/signup";
import { LoginContext } from "./components/context/login_context";

function App() {
  const { isLoggedin } = useContext(LoginContext);

  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedin ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;
