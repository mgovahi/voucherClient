import React from "react";
import ReactApexChart from "react-apexcharts";
import { Paper, useTheme, Box, Typography } from "@mui/material";
import { useMemo } from "react";
import moment from "jalali-moment";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { fontSize, margin } from "@mui/system";
import fa from "apexcharts/dist/locales/fa.json";
import { useSelector } from "react-redux";
import { selectCurrentLanguage } from "app/store/i18nSlice";
const AmountChart = () => {
  const pastSevenDays = [];
  const currentLanguage = useSelector(selectCurrentLanguage);
  const daysOfWeek =
    currentLanguage.id == "fa"
      ? [
          "یک‌شنبه",
          "دو‌شنبه",
          "سه‌شنبه",
          "چهارشنبه",
          "پنج‌شنبه",
          "جمعه",
          "شنبه",
        ]
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

  for (let i = 0; i <= 6; i++) {
    const currentDate = moment(new Date());
    const pastDate = currentDate.subtract(i, "days");
    const dayOfWeekIndex = pastDate.day(); // Get the index of the day of the week
    const dayOfWeekName = daysOfWeek[dayOfWeekIndex]; // Get the name of the day of the week

    pastSevenDays.push(dayOfWeekName);
  }

  const { t } = useTranslation();
  const theme = useTheme();
  const chartData = useMemo(() => {
    return {
      series: [
        {
          name: "موجودی هفته اخیر",
          data: [1.2, 1.8, 1.5, 2.8, 2.3, 1.3, 2.2],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: "214.4px",
          stacked: true,
          toolbar: {
            show: false,
          },
          locales: [fa],
          defaultLocale: "fa",
        },

        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 7,
            columnWidth: "18px",
            // borderRadiusWhenStacked: "all",
            borderRadiusApplication: "around",
          },
        },
        dataLabels: {
          enabled: false,
        },
        // stroke: {
        //     show: true,
        //     width: 2,
        //     colors: [theme.palette.secondary.light]
        // },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
          strokeDashArray: [2, 5], //grid lines
        },
        xaxis: {
          categories: pastSevenDays.reverse(),
          type: "string",
          labels: {
            show: true,
            style: {
              colors: theme.palette.text.grayDay,
              fontSize: "12px",
              fontFamily: "IRANYekanX",
            },
          },
        },

        yaxis: {
          show: true,
          showAlways: false,
          showForNullSeries: true,
          seriesName: 1,
          opposite: false,
          reversed: false,
          logarithmic: false,
          logBase: 10,
          tickAmount: 3,
          stepSize: 3,
          forceNiceScale: false,
          floating: false,
          decimalsInFloat: 5,
          min: 0,
          max: 3,
          labels: {
            style: {
              colors: theme.palette.text.grayDay,
              fontSize: "12px",
              fontFamily: "IRANYekanX",
            },
            formatter: function (val) {
              // Define an array to hold Farsi numerals
              const farsiNumerals = [
                "۰",
                "۱م",
                "۲م",
                "۳م",
                "۴م",
                "۵م",
                "۶م",
                "۷م",
                "۸م",
                "۹م",
              ];

              // Convert the number to a string
              const valString = val.toString();

              // Initialize an empty string to hold the Farsi representation
              let farsiRepresentation = "";

              // Loop through each digit of the number and replace it with its Farsi equivalent
              for (let i = 0; i < valString.length; i++) {
                const digit = parseInt(valString[i]);
                farsiRepresentation += farsiNumerals[digit];
              }

              return farsiRepresentation;
            },
          },
        },
        // fill: {
        //     opacity: 1,
        //     colors: [theme.palette.secondary.light]
        // },
        fill: {
          opacity: 1,
          colors: [
            function ({ value, seriesIndex, w }) {
              return theme.palette.primary.main;
            },
          ],
        },

        tooltip: {
          y: {
            formatter: function (val) {
              return "$" + val;
            },
          },
          style: {
            colors: theme.palette.text.grayDay,
            fontSize: "12px",
            fontFamily: "IRANYekanX",
          },
        },
      },
    };
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
        ".apexcharts-tooltip-marker": {
          marginRight: "10px",
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
        <span> {t("LATEST_YOUR_BALANCE")}</span>
      </Box>
      <Chart
        options={chartData.options}
        series={chartData.series}
        className="w-4/4 ml-0 pt-10 pl-20 pr-20 "
        type="bar"
        height={"200px"}
      />

      <Box
        className="overflow-hidden justify-center items-center p-20 "
        height={"60px"}
        width={"100%"}
        sx={{
          display: "flex",
          fontWeight: "bold",
        }}
      >
        <Paper
          className=" overflow-hidden justify-center items-center px-20  py-8 "
          elevation={0}
          sx={{
            display: "flex",
            minHeight: "30px",
            width: "356px",
            backgroundColor: theme.palette.secondary.slowLight,
          }}
        >
          <Typography
            variant="inherit"
            sx={{
              color: theme.palette.primary.main,
              fontSize: "14px",
              lineHeight: "20px",
              marginRight: "10px",
              svg: {
                marginRight: "5px",
                verticalAlign: "sub",
              },
            }}
          >
            <FuseSvgIcon size="24px">
              mv-icons-mc:icon-icon-money-bag
            </FuseSvgIcon>
            {t("YOUR_BALANCE")}:
          </Typography>
          <Typography
            fontFamily="IRANYekanXNumEnBold"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            $4,580
          </Typography>
        </Paper>
      </Box>
    </Paper>
  );
};

export default AmountChart;
