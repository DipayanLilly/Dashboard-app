import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { SidebarContext } from "../context/drawerContext";
import { useContext } from "react";
import styles from "./navbar.module.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { isCollapsed, toggleSidebar } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div
      className={`${styles.navbarContainer} ${
        isCollapsed ? styles.navbarCollapsed : styles.navbarExpanded
      }`}
    >
      <div className={styles.leftEdgeComponents}>
        <button onClick={toggleSidebar} className={styles.toggleViewButton}>
          <MenuOpenIcon
            className={isCollapsed ? styles.iconRotated : styles.iconNormal}
          />
        </button>
        <div className={styles.verticalLine}></div>
        <div className={styles.searchWrapper}>
          <SearchOutlinedIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="SEARCH.."
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.rightEdgeComponents}>
        <div className={styles.newContract}>
          <AddOutlinedIcon className={styles.addIcon} />
          <p>NEW CONTRACT</p>
        </div>
        <div className={styles.icons}>
          <NotificationsNoneIcon className={styles.icon} />
          <MailOutlinedIcon className={styles.icon} />
          <AppsOutlinedIcon className={styles.icon} />
        </div>

        <button onClick={handleLogout} className={styles.logOut}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
