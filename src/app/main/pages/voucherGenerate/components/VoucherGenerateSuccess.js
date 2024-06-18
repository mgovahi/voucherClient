import React from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Alert, AlertTitle, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import CopyButton from "app/shared-components/CopyButton/CopyButton";

const VoucherGenerateSuccess = ({ onShowPage }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const transactionId = "VP12350xp12301";
  const loading = false;
  return (
    <Box className="grid gap-[34px]">
      <Alert
        severity="warning"
        className="w-full my-0 mx-auto gap-12"
        icon={
          <FuseSvgIcon sx={{ stroke: "none !important" }} size={24}>
            mv-icons-mc:icon-AlertInfo
          </FuseSvgIcon>
        }
        sx={{
          mt: "20px",
          ".MuiAlert-icon": { marginRight: 0 },
        }}
      >
        <AlertTitle className="text-14">{t("VOUCHER_CODE")}</AlertTitle>
        <p> {t("VOUCHER_CODE_ALERT_ONE")}</p>
        <p> {t("VOUCHER_CODE_ALERT_TWO")}</p>
      </Alert>
      <Alert
        severity="success"
        className="grid justify-center justify-items-center text-center p-40 sm:w-3/4 w-full my-0 mx-auto"
        icon={
          <FuseSvgIcon color={theme.palette.common.white} size={80}>
            mv-icons-mc:icon-icon-success
          </FuseSvgIcon>
        }
        sx={{
          mt: "20px",
          ".MuiAlert-icon": { marginRight: 0 },
        }}
      >
        <Typography className="font-bold" variant="body2">
          {t("VOUCHER_GENERATION_SUCCESS_ALERT")}
        </Typography>
        <Typography
          className="font-bold mt-20 mb-10"
          variant="body2"
          color="custome.darkSky"
        >
          {t("VOUCHER_GENERATION_CODE_ALERT")}
        </Typography>
        <Box className=" mt-20">
          <CopyButton voucherCode="2023-9876-1010-1234" />
        </Box>
      </Alert>
      <Box className="flex justify-end mt-20">
        <ButtonComponent
          sx={{
            width: { xs: "100%", sm: "fit-content" },
          }}
          color="secondary"
          size="middle"
          variant="contained"
          type="submit"
          isLoading={loading}
          endIcon={
            loading ? (
              <CircularProgress size={16} sx={{ color: "#fff" }} />
            ) : (
              <FuseSvgIcon color={theme.palette.common.white} size={20}>
                mv-icons:icon-menu-new-voucher
              </FuseSvgIcon>
            )
          }
          onClick={onShowPage}
        >
          <span className="mt-4"> {t("NEW_VOUCHER")}</span>
        </ButtonComponent>
      </Box>
    </Box>
  );
};

export default VoucherGenerateSuccess;
