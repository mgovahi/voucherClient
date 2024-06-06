import React from "react";
import ReactApexChart from "react-apexcharts";
import { Paper, useTheme, Box, Typography } from "@mui/material";
import { useMemo } from "react";
import moment from "jalali-moment";

import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { fontSize } from "@mui/system";
import fa from "apexcharts/dist/locales/fa.json";
import { useSelector } from "react-redux";
import { selectCurrentLanguageDirection } from "app/store/i18nSlice";
const TotalAmountChart = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const langDirection = useSelector(selectCurrentLanguageDirection);

  const chartData = useMemo(() => {
    return {
      series: [4242, 1200],
      options: {
        chart: {
          sparkline: { enabled: true },
          animations: { enabled: false },
        },
        stroke: {
          width: 0,
          colors: [theme.palette.background.paper],
        },
        legend: {
          show: true,
          position: langDirection == "rtl" ? "right" : "left",
          fontFamily: "IranYekan",
          horizontalAlign: "left",
          formatter: function (val, opts) {
            return (
              "<span class='legend-custome'>" +
              "<b>" +
              val +
              "</b>" +
              "<i>$" +
              opts.w.globals.series[opts.seriesIndex].toAmount() +
              "</i>" +
              "</span>"
            );
          },
        },
        tooltip: { enabled: false },
        dataLabels: { enabled: false },
        subtitle: { text: "" },
        colors: [theme.palette.primary.main, theme.palette.secondary.main],
        labels: [t("WALLET"), t("VOUCHER")],

        grid: {
          padding: {
            top: -10,
            bottom: 5,
          },
        },
        states: {
          hover: {
            filter: { type: "none" },
          },
          active: {
            filter: { type: "none" },
          },
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "75%",
              labels: {
                show: true,
                name: {
                  offsetY: -2,
                  label: "50",
                  show: true,
                },
                value: {
                  offsetY: 2,
                  show: true,
                  formatter: (a) => "$" + a.toAmount(),
                },
                total: {
                  show: true,
                  label: t("TOTAL_BALANCE"),
                  formatter: (a) => "",
                },
              },
            },
          },
        },
      },
    };
  }, []);
  return (
    <Paper
      className="gap-4 h-full" //flex flex-col items-center
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
      <Box
        sx={{
          ".apexcharts-legend": {
            width: "40%",
            display: "flex",
            justifyContent: "center !important",
            ".apexcharts-legend-marker": {
              height: "3px !important",
              width: "8px !important",
              marginRight: "5px",
            },
            ".apexcharts-legend-text": {
              color: theme.palette.text.grayDay + " !important",
              display: "inline-block",
              width: "90%",
            },
            ".legend-custome": {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              i: {
                fontStyle: "normal",
              },
              b: {
                fontWeight: "normal",
                display: "inline-block",
              },
            },
          },
          ".apexcharts-graphical": {},
          text: {
            fontFamily: "IranYekan !important",
            fill: theme.palette.text.grayDay + " !important",
            fontSize: "12px",
            marginBottom: "10px",
          },
        }}
      >
        <ReactApexChart
          type="donut"
          width={"100%"}
          height={220}
          options={chartData.options}
          series={chartData.series}
        />
      </Box>
    </Paper>
  );
};

export default TotalAmountChart;
