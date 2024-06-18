import React from "react";
import ReactApexChart from "react-apexcharts";
import { Paper, useTheme, Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

function SimpleStatBox({ icon, color, statValue, statTitle }) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className="flex flex-col justify-center items-center rounded p-[20px]"
        sx={{
          backgroundColor: color.main,
          color: color.contrastText,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            borderRadius: "50%",
            backgroundColor: "#fff",
            padding: "11px",
            width: "50px",
            height: "50px",
            mb: "20px",
          }}
        >
          <FuseSvgIcon size={28}>{icon}</FuseSvgIcon>
        </Typography>
        <Typography className="font-bold" fontFamily="IRANYekanX">
          {statValue}
        </Typography>
        <Typography
          sx={{
            opacity: "0.8",
            textTransform: "uppercase",
          }}
        >
          {t(statTitle)}
        </Typography>
      </Box>
    </>
  );
}

export default SimpleStatBox;
