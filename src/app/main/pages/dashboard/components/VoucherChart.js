import { Paper, useTheme, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import moment from "jalali-moment";
import fa from "apexcharts/dist/locales/fa.json";
import { useTranslation } from "react-i18next";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { Box } from "@mui/system";
import { selectCurrentLanguage } from "app/store/i18nSlice";
import { useSelector } from "react-redux";
import { useThemeMediaQuery } from "@fuse/hooks";

const VoucherChart = () => {
  let pastSevenDays = [];
  const currentLanguage = useSelector(selectCurrentLanguage);

  for (let i = 0; i <= 6; i++) {
    const currentDate = moment(new Date());
    const pastDate = currentDate.subtract(i, "days");
    const formattedDate = pastDate.locale(currentLanguage.id).format("DD MMM");

    pastSevenDays.push(formattedDate);
  }
  const theme = useTheme();
  const { t } = useTranslation();

  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isSmallMobile = useMediaQuery("(max-width:400px)")

  const chartData = useMemo(() => {
    return {
      series: [
        {
          name: t("GENERATED_VOUCHERS"),
          data: [10, 12, 15, 17, 15, 7, 5],
        },
        {
          name: t("USED_VOUCHERS"),
          data: [-10, -12, -15, -17, -15, -7, -5],
        },
      ],
      options: {
        chart: {
          type: "bar",
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
            borderRadius: 10,
            columnWidth: "20px",
            borderRadiusWhenStacked: "all",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
          strokeDashArray: [2, 5], // Define a dashed pattern for the grid lines
        },
        xaxis: {
          categories: pastSevenDays.reverse(),
          type: "string",
          labels: {
            show: true,
            align: "center",
            // format: 'MM/dd',
            // offsetY: isSmallMobile ? 35 : 0,
            style: {
              colors: theme.palette.text.grayDay,
              fontSize: "12px",
              fontFamily: "IRANYekanX",
            },
          },
        },
        yaxis: {
          min: -20,
          max: 20,
          labels: {
            style: {
              colors: theme.palette.text.grayDay,
              fontSize: "12px",
              fontFamily: "IRANYekanX",
            },
            formatter: function (val) {
              return Math.abs(val).toPersianDigits();
            },
          },
        },
        legend: {
          show: true,
          position: "top",
          horizontalAlign: "right",
          fontSize: isMobile ? "12px" : "15px",
          fontFamily: "IRANYekanX",
          labels: {
            colors: theme.palette.text.grayDay,
          },
          markers: {
            width: 8,
            height: 3,
            fillColors: [
              theme.palette.primary.main,
              theme.palette.secondary.main,
            ],
            radius: 5,
            offsetY: -3,
            //offsetX: -130,
          },
          itemMargin: {
            horizontal: 5,
            vertical: 0,
          },
        },
        fill: {
          opacity: 1,
          colors: [theme.palette.primary.main, theme.palette.secondary.main],
        },
        tooltip: {
          style: {
            colors: theme.palette.text.grayDay,
            fontSize: "12px",
            fontFamily: "IRANYekanX",
          },
        },
      },
    };
  }, [isMobile, isSmallMobile]);

  return (
    <Paper
      className="gap-4 px-[29px] py-[27px]" //flex flex-col items-center
      sx={{
        position: "relative",
        ".apexcharts-align-right": {
          flexDirection: "row-reverse",
          justifyContent: "flex-start!important",
          padding: { xs: "0 10px 0 0" },
          columnGap: { xs: "0", md: "20px" },
          rowGap: "5px",

          ".apexcharts-legend-marker": {
            marginRight: "5px",
          },
        },
        ".FusePageSimple-header": {
          borderBottom: "none",
          position: "absolute",
          padding: "0",
        },
      }}
    >
      <FusePageSimpleHeader
        inner
        header={t("VOUCHER_LAST_WEEK")}
      ></FusePageSimpleHeader>
      <Grid
        container
        alignItems="flex-end"
        justifyContent="space-between"
        rowSpacing={4}
      >
        <Grid item xs={12} sm={4} md={2}>
          <Box
            sm={10}
            sx={{
              backgroundColor: theme.palette.custome.red,
              width: { xs: "auto", md: "230px" },
              height: { xs: "200px", sm: "320px" },
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                padding: "25px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography variant="body3" color="#fff" className="font-bold">
                {t("NEW_DEPOSIT")}
              </Typography>
              <Typography
                variant="small"
                color={theme.palette.custome.lightPurple}
                className="font-bold text-[12px]"
              >
                {t("DEPOSIT_SENTENCE")}
              </Typography>
              <Button
                sx={{
                  backgroundColor: theme.palette.custome.yellow,
                  width: "90px",
                  height: "28px",
                  fontSize: "12px",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "5px 10px",
                  zIndex: 2,
                }}
              >
                {t("ADD_DEPOSIT")}
              </Button>
            </Box>
            <img
              src="/assets/images/new-payment.svg"
              className="absolute rtl:-left-1 ltr:-right-1 -bottom-2 xs:w-[17rem] lg:w-192"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VoucherChart;
