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

const isLoggedin = () => {
  return localStorage.getItem("userName") !== null;
};

const PrivateRoute = ({ children }) => {
  return isLoggedin() ? children : <Navigate to="/" />;
};

function App() {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;
