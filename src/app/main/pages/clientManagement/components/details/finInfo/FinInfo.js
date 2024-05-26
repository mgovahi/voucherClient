import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import LatestVouchers from "./LatstVouchers";
import LatestDeposits from "./LatestDeposits";
function FinInfo({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box>
      <Box
        className="p-[16px]"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <LatestVouchers />
        <LatestDeposits />
      </Box>
    </Box>
  );
}
export default FinInfo;
