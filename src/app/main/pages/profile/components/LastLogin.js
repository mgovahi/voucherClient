import React, { useState } from "react";
import { useMemo } from "react";
import moment from "jalali-moment";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTheme } from "@mui/material/styles";
import {
  Paper,
  Button,
  Box,
  Typography,
  Alert,
  FormControl,
  TextField,
  IconButton,
  Chip,
  Grid,
} from "@mui/material";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";

const Lastlogin = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [info, setInfo] = useState({
    SampleData,
  });

  return (
    <Paper className="w-full">
      <FusePageSimpleHeader  className="mb-12" header={t("LAST_LOGIN")}></FusePageSimpleHeader>

      <Grid container>
        {SampleData.map((dataItem) => (
          <Grid
            item
            xs={12}
            md={6}
            sm={6}
            lg={12}
            key={dataItem.id}
            className=" text-right  md:mx-0 "
            sx={{
              " p:not(:first-child)": {
                minWidth: "25%",
                textAlign: "center",
              },
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              padding: 2, 
              backgroundColor: { xs: theme.palette.custome.cyanBlueLight, sm: theme.palette.custome.cyanBlueLight, md: "transparent", lg: "transparent" },
              marginBottom: { xs: "10px", sm: "10px", md: 0, lg: 0 },


            }}
          >
            <Grid
              className="md:mx-40 ,"
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                maxWidth: "100%!important",
               
              }}
            >
              <Typography className="font-bold " sx={{ fontSize: "14px" }}>
                <Chip
                  color="successLight"
                  sx={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    mr: "10px",
                  }}
                  label={
                    <FuseSvgIcon
                      size={16}
                      sx={{
                        stroke: "transparent !important",
                        display: "block!important",
                      }}
                      className="ml-14 "
                    >
                      mv-icons-mc:icon-Login
                    </FuseSvgIcon>
                  }
                ></Chip>
                {moment(dataItem.date).format("YYYY-MM-DD hh:mm:ss")}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{ fontSize: "14px", color: theme.palette.text.grayT }}
              >
                {dataItem.ip}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                marginBottom: { sm: "10px" },
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: theme.palette.text.grayT }}
              >
                {dataItem.browser}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{ fontSize: "14px", color: theme.palette.text.grayT }}
              >
                {dataItem.os}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

const SampleData = [
  {
    ip: "۲۰۰.۱۲۳.۱.۳۰",
    browser: "Chrome",
    os: "Windows",
    date: new Date().getTime(),
    id: 1,
  },
  {
    ip: "۲۰۰.۱۲۳.۱.۳۰",
    browser: "Safari",
    os: "Mac OS",
    date: new Date().getTime(),
    id: 2,
  },
  {
    ip: "۲۰۰.۱۲۳.۱.۳۰",
    browser: "iOS",
    os: "iPhone Pro",
    date: new Date().getTime(),
    id: 3,
  },
  {
    ip: "۲۰۰.۱۲۳.۱.۳۰",
    browser: "iOS",
    os: "iPhone Pro",
    date: new Date().getTime(),
    id: 3,
  },
];

export default Lastlogin;
