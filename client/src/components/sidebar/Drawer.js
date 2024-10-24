import React from "react";
import { Sidebar, MenuItem, Submenu } from "react-mui-sidebar";
import styles from "./sidebar.module.css";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ContactsIcon from "@mui/icons-material/Contacts";
import InsightsIcon from "@mui/icons-material/Insights";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { SidebarContext } from "../context/drawerContext";
import { useContext } from "react";
import { LoginContext } from "../context/login_context";

const SidebarData = [
  { icon: <EqualizerIcon />, text: "Dashboard" },
  {
    icon: <ContactsIcon />,
    text: "Contacts",
    list: [
      { icon: <InsightsIcon />, text: "Statistics" },
      {
        icon: <TextSnippetOutlinedIcon />,
        text: "List by Status",
        list: [
          { text: "All" },
          { text: "Active" },
          { text: "Pending" },
          { text: "Terminated" },
          { text: "Archived" },
        ],
      },
    ],
  },
  { icon: <LocalAtmOutlinedIcon />, text: "Schedule" },
  { icon: <ComputerOutlinedIcon />, text: "Tasks" },
  { icon: <HandshakeOutlinedIcon />, text: "Partners" },
  { icon: <WorkOutlineOutlinedIcon />, text: "Cases" },
];

const renderMenuItems = (items) =>
  items.map((item, index) =>
    item.list ? (
      <Submenu key={index} title={item.text} icon={item.icon}>
        <div className={styles.indent}>{renderMenuItems(item.list)}</div>
      </Submenu>
    ) : (
      <MenuItem key={index} icon={item.icon}>
        {item.text}
      </MenuItem>
    )
  );

const Drawer = () => {
  const { isCollapsed } = useContext(SidebarContext);
  const { userName } = useContext(LoginContext);

  return (
    <div
      className={`${styles.sidebarContainer} ${
        isCollapsed ? styles.collapsed : styles.expanded
      }`}
    >
      <Sidebar
        width={"270px"}
        className={styles.sidebar}
        themeColor="#433d61"
        textColor="#ffff"
        showProfile={false}
        isCollapse={isCollapsed}
      >
        <div
          className={`${styles.profileImageContainer} ${
            isCollapsed ? styles.collapsedBackground : styles.expandedBackground
          }`}
        >
          <img
            src={
              isCollapsed
                ? "https://i.postimg.cc/MTsSKMGB/Eli-Lilly-Logo-2-751x469.png"
                : "https://i.postimg.cc/HnGrzhQ3/Eli-Lilly-logo.jpg"
            }
            alt="profile-photo"
            className={styles.profileImage}
          />
        </div>
        {!isCollapsed && <p className={styles.username}>Hi {userName}</p>}
        <div className={styles.menuWrapper}>{renderMenuItems(SidebarData)}</div>
      </Sidebar>
    </div>
  );
};

export default Drawer;
