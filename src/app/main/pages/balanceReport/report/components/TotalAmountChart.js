import React from "react";
import ReactApexChart from "react-apexcharts";
import { Paper, useTheme, Box, Typography } from "@mui/material";
import { useMemo } from "react";
import moment from "jalali-moment";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { fontSize } from "@mui/system";
import fa from "apexcharts/dist/locales/fa.json";

const pastSevenDays = [];

const daysOfWeek = [
  "یک‌شنبه",
  "دو‌شنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
  "شنبه",
];

for (let i = 0; i <= 6; i++) {
  const currentDate = moment(new Date());
  const pastDate = currentDate.subtract(i, "days");
  const dayOfWeekIndex = pastDate.day(); // Get the index of the day of the week
  const dayOfWeekName = daysOfWeek[dayOfWeekIndex]; // Get the name of the day of the week

  pastSevenDays.push(dayOfWeekName);
}

const TotalAmountChart = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const chartData = useMemo(() => {
    return {};
  }, []);
  return (
    <Paper
      className="gap-4 " //flex flex-col items-center
      sx={{
        ".apexcharts-align-right": {
          flexDirection: "row-reverse",
          justifyContent: "flex-start!important",
          padding: "0 50px",
          gap: "20px",
          ".apexcharts-legend-series:first-child": {
            ".apexcharts-legend-marker": {
              right: "-120px!important",
            },
          },
        },
      }}
    >
      <Box
        className=" overflow-hidden justify-center items-center p-20 "
        // height={"61px"}
        width={"100%"}
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          height: "61px",
        }}
      >
        <span> {t("YOUR_BALANCE")}</span>
      </Box>
    </Paper>
  );
};

export default TotalAmountChart;
