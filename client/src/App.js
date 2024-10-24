import React from "react";
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
import LoginContextProvider from "./components/context/login_context";

function App() {
  return (
    <LoginContextProvider>
      <SidebarProvider>
        <Router>
          <Routes>
            <Route></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </SidebarProvider>
    </LoginContextProvider>
  );
}

export default App;
