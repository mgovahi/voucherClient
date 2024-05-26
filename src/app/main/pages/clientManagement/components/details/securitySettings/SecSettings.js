import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import ChangePassword from "./ChangePassword";
import LastSignin from "./LastSignin";
function SecSettings({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box>
      <Box
        className="p-[16px]"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <ChangePassword onCancelClick={onCancelClick} />
      </Box>
      <Box
        className="p-[16px] mt-16"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <LastSignin />
      </Box>
    </Box>
  );
}
export default SecSettings;
