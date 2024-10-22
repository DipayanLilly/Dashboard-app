import React from "react";
import styles from "./HomeHero.module.css";
import { Box } from "@mui/material";
import CustomAreaChart from "../charts/areaChart";
import CustomePieChart from "../charts/pieChart";
import CustomLineChart from "../charts/linechart";

function HomeHero() {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.title}>
        <span>CRM</span> Dashboard
      </p>
      <p className={styles.subtitle}>Overview</p>
      <div className={styles.chartsContainer}>
        <Box
          sx={{
            backgroundColor: "#382753",
            padding: 3,
            "&:hover": {
              backgroundColor: "#4a3b6a",
            },
            borderRadius: "20px",
            margin: "20px 0px",
            width: "100%",
          }}
        >
          <CustomAreaChart />
        </Box>
        <Box
          sx={{
            backgroundColor: "#382753",
            padding: 3,
            "&:hover": {
              backgroundColor: "#4a3b6a",
            },
            borderRadius: "20px",
            margin: "20px 0px",
            width: "40%",
            height: "280px",
          }}
        >
          <CustomePieChart />
        </Box>
        <Box
          sx={{
            backgroundColor: "#382753",
            padding: 3,
            "&:hover": {
              backgroundColor: "#4a3b6a",
            },
            borderRadius: "20px",
            margin: "20px 0px",
            width: "50%",
            height: "280px",
          }}
        >
          <CustomLineChart />
        </Box>
      </div>
    </div>
  );
}

export default HomeHero;
