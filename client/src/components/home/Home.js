import * as React from "react";
import Drawer from "../sidebar/Drawer";
import styles from "./home.module.css";
import Navbar from "../navbar/Navbar";
import { SidebarContext } from "../context/drawerContext";
import RightPanel from "../rightPanel/rightPanel";
import HomeHero from "../hero/HomeHero";
import { useContext } from "react";

export default function Home() {
  const { isCollapsed } = useContext(SidebarContext);
  const userName = localStorage.getItem("userName");

  return (
    <div className={styles.home}>
      <Drawer userName={userName} />
      <div className={styles.mainContent}>
        <Navbar />
        <div
          className={`${styles.rightDeck} ${
            isCollapsed ? styles.collapsed : styles.expanded
          }`}
        >
          <HomeHero />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
