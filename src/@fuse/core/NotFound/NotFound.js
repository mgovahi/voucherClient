import React from "react";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "../FuseSvgIcon";
import { useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function NotFound(props) {
  const { t } = useTranslation();
  const { noDesc } = props;
  const theme = useTheme();
  return (
    <Box className="my-72 mx-auto grid justify-items-center gap-10 w-full">
      <FuseSvgIcon
        className={`w-88 h-88 rounded-full bg-[${theme.palette.secondary.main}] p-16`}
      >
        ob_icons:icon-no-data
      </FuseSvgIcon>
      <Typography variant="body4" className="font-bold" color={theme.palette.primary.main}>{t("DATA_NOT_FOUND_TO_SHOW")}</Typography>
      <b>{!noDesc ? t("CHECK_RELATED_INPUTS") : ""}</b>
    </Box>
  );
}

export default NotFound;
