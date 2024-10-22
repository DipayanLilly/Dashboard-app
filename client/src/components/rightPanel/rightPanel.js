import React from "react";
import styles from "./rightPanel.module.css";
import LinkIcon from "@mui/icons-material/Link";

const CONTRACTS = [
  {
    name: "Dropbox",
    img: "https://i.postimg.cc/15jsVc24/dropbox-logo.jpg",
    location: "SF,NY",
    costs: "$5.58",
  },
  {
    name: "Dribble",
    img: "https://i.postimg.cc/TwLHSgQN/dribbble-logo-dribbble-logo-transparent-dribbble-icon-transparent-free-free-png.png",
    location: "SALEM,MA",
    costs: "$12.58",
  },
  {
    name: "Pepsik",
    img: "https://i.postimg.cc/cCfk1WpQ/Pepsi-Symbol.png",
    location: "CALIFORNIA,NY",
    costs: "$8.58",
  },
  {
    name: "LILLY",
    img: "https://i.postimg.cc/6Q1mYYVG/OIP.jpg",
    location: "IN,NY",
    costs: "$9.8",
  },
  {
    name: "Coco-cola",
    img: "https://i.postimg.cc/ry4PNGDK/coca-cola-logo.png",
    location: "SF,NY",
    costs: "$2.8",
  },
];

const LINKS = [
  {
    title: "Corporate Website",
    link: "www.google.com",
  },
  {
    title: "Google Drive",
    link: "www.google.com",
  },
  {
    title: "Google Adwords",
    link: "www.google.com",
  },
  {
    title: "Google Analytics",
    link: "www.google.com",
  },
];

function RightPanel() {
  return (
    <div className={styles.rightPanelContainer}>
      <p className={styles.title}>TOP 5 CONTRACTS</p>
      <hr className={styles.hr} />
      <div className={styles.container}>
        {CONTRACTS.map((contract, index) => (
          <div key={index} className={styles.contract}>
            <img
              className={styles.contractImage}
              src={contract.img}
              alt={contract.name}
            />
            <div className={styles.contractDetails}>
              <div className={styles.column}>
                <p className={styles.contractName}>{contract.name}</p>
                <p className={styles.contractLocation}>{contract.location}</p>
              </div>
              <div className={styles.column}>
                <p className={styles.contractName}>COSTS</p>
                <p className={styles.contractCost}>{contract.costs}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.title}>LINKS</p>
      <hr className={styles.hr} />
      <div className={styles.container}>
        {LINKS.map((link, index) => (
          <div key={index} className={styles.link}>
            <LinkIcon />
            <a href={link.link} className={styles.linkTitle}>
              {link.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightPanel;
