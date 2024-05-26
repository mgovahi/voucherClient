import React, { useState, useMemo, useCallback } from "react";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const CurrencyPriceHistory = ({ header, chartHeader }) => {
  const [mode, setMode] = useState("daily");
  const { t } = useTranslation();

  const generateData = useCallback((mode) => {
    const data = [];
    const intervals = mode === "daily" ? 40 : mode === "weekly" ? 28 : 4;
    const currentTime = new Date();

    // Set the start time to the current hour and minute (rounded down to nearest 15-minute interval)
    const startTime = new Date(currentTime);
    startTime.setMinutes(Math.floor(startTime.getMinutes() / 15) * 15);

    for (let i = intervals - 1; i >= 0; i--) {
      const timestamp = new Date(startTime);

      if (mode === "daily") {
        timestamp.setMinutes(startTime.getMinutes() - i * 15);
        const hour = ("0" + timestamp.getHours()).slice(-2);
        const minute = ("0" + timestamp.getMinutes()).slice(-2);
        const xAxis = hour + ":" + minute;
        addDataPoint(xAxis);
      }

      if (mode === "weekly") {
        timestamp.setDate(currentTime.getDate() - i); 
        const day = timestamp.getDay(); 
        const xAxis = getDayOfWeek(day);
        addDataPoint(xAxis);
      }

      if (mode === "monthly") {
        const weekOfMonth = i + 1; 
        const xAxis = "هفته " + weekOfMonth;
        addDataPoint(xAxis);
      }
    }

    return data;

    function addDataPoint(xAxis) {
      // Generate random numbers for y within the range [9250.00, 9750.00]
      const randomNumber1 = getRandomNumber(9250.0, 9750.0);
      const randomNumber2 = getRandomNumber(9250.0, 9750.0);
      const randomNumber3 = getRandomNumber(9250.0, 9750.0);
      const randomNumber4 = getRandomNumber(9250.0, 9750.0);

      // Create data object with x and y values
      const dataObject = {
        x: xAxis,
        y: [randomNumber1, randomNumber2, randomNumber3, randomNumber4].map(
          (num) => parseFloat(num.toFixed(2))
        ),
      };

      data.push(dataObject);
    }

    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    function getDayOfWeek(dayIndex) {
      const daysOfWeek = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
      return daysOfWeek[dayIndex];
    }
    
  }, []);

  const dataArray = generateData(mode);
  const maxData = Math.max(...dataArray.map((item) => Math.max(...item.y)));
  const minData = Math.min(...dataArray.map((item) => Math.min(...item.y)));

  const chartData = useMemo(() => {
    return {
      series: [
        {
          data: generateData(mode),
        },
      ],
      options: {
        chart: {
          type: "candlestick",
          height: 500,
          width: 500,
          toolbar: {
            show: false,
          },
        },
        grid: {
          borderColor: "#e0e2eb",
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        xaxis: {
          type: "string",
          tickAmount: 9,
          labels: {
            style: {
              colors: ["#717579"],
              fontSize: "14px",
              fontFamily: "IRANYekanX"
            },
          },
          axisBorder: {
            color: "#e0e2eb",
          },
        },
        yaxis: {
          opposite: true, // Display y-axis on the right side
          labels: {
            align: "center",
            minWidth: 50,
            style: {
              colors: ["#717579"],
              fontSize: "14px",
            },
          },
          axisBorder: {
            color: "#e0e2eb",
          },
          min: 9200,
          max: 9800,
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#3ab67a",
              downward: "#fd5353",
            },
          },
        },
        annotations: {
          yaxis: [
            {
              y: minData,
              borderColor: "#ff5449",
              label: {
                borderColor: "#ff5449",
                borderWidth: 2,
                borderRadius: 20,
                style: {
                  color: "#fff",
                  background: "#ff5449",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: {
                    left: 15,
                    right: 15,
                    top: 8,
                    bottom: 10,
                  },
                },
                offsetY: 7,
                text: minData,
              },
              strokeDashArray: 6,
            },
            {
              y: maxData,
              borderColor: "#bdc7dc",
              label: {
                borderColor: "#bdc7dc",
                borderWidth: 2,
                borderRadius: 20,
                style: {
                  color: "#fff",
                  background: "#bdc7dc",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: {
                    left: 15,
                    right: 15,
                    top: 8,
                    bottom: 10,
                  },
                },
                offsetY: 7,
                text: maxData,
              },
              strokeDashArray: 6,
            },
          ],
        },
      },
    };
  }, [mode]);

  return (
    <Paper>
      <FusePageSimpleHeader header={t(header)}></FusePageSimpleHeader>
      <Box className="py-40">
        <FusePageSimpleHeader
          className="noBorder"
          header={
            <>
              <FuseSvgIcon className="ml-10" size={40}>
                mv-icons-mc:icon-flag-USA
              </FuseSvgIcon>
              {t(chartHeader)}
            </>
          }
          headerActions={
            <>
              <Box className="flex gap-x-[60px]">
                <Button
                  variant={
                    mode == "weekly" || mode == "monthly" ? "text" : "contained"
                  }
                  color={
                    mode == "weekly" || mode == "monthly" ? "default" : "info"
                  }
                  size="small"
                  onClick={() => {
                    setMode("daily");
                  }}
                >
                  {t("DAILY")}
                </Button>
                <Button
                  variant={
                    mode == "daily" || mode == "monthly" ? "text" : "contained"
                  }
                  color={
                    mode == "daily" || mode == "monthly" ? "default" : "info"
                  }
                  size="small"
                  onClick={() => {
                    setMode("weekly");
                  }}
                >
                  {t("WEEKLY")}
                </Button>
                <Button
                  variant={
                    mode == "weekly" || mode == "daily" ? "text" : "contained"
                  }
                  color={
                    mode == "weekly" || mode == "daily" ? "default" : "info"
                  }
                  size="small"
                  onClick={() => {
                    setMode("monthly");
                  }}
                >
                  {t("MONTHLY")}
                </Button>
              </Box>
            </>
          }
        ></FusePageSimpleHeader>
        <Chart
          options={chartData.options}
          series={chartData.series}
          height={400}
          type="candlestick"
        />
      </Box>
    </Paper>
  );
};

export default CurrencyPriceHistory;
