import React from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Alert, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

const AddDepositSuccess = ({ onShowPage }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const transactionId = "VP12350xp12301";
  const loading = false;
  return (
    <>
      <Alert
        severity="success"
        className="grid justify-center justify-items-center text-center p-40 w-3/4 my-0 mx-auto"
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
          {t("SUCCESS_TRANSACTION")}
        </Typography>
        <Typography
          className="font-bold mt-20 mb-5"
          variant="body2"
          sx={{ color: theme.palette.custome.darkSky }}
        >
          {t("TRANSACTION_ID_TEXT_PART_ONE")}
          {
            <span style={{ color: theme.palette.secondary.main }}>
              {` ${transactionId} `}
            </span>
          }
          {t("TRANSACTION_ID_TEXT_PART_TWO")}
        </Typography>
        <Typography
          sx={{ color: theme.palette.custome.darkSky }}
          variant="body2"
        >
          {t("SUCCESS_ALERT_HELPER_TEXT")}
        </Typography>
        <Box className=" mt-20">
          <ButtonComponent
            sx={{
              width: { xs: "100%", sm: "fit-content" },
              color: theme.palette.primary.tabMain,
              borderColor: "rgba(145, 85, 253, 0.5)",
              fontWeight: "bold",
            }}
            size="middle"
            variant="outlined"
            type="submit"
            isLoading={loading}
            onClick={() => navigate("/depositsReport")}
          >
            {t("DEPOSITS_REPORT")}
          </ButtonComponent>
        </Box>
      </Alert>
      <Box className="flex justify-end mt-[54px]">
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
                mv-icons:icon-icon-menu-transfer-add
              </FuseSvgIcon>
            )
          }
          onClick={onShowPage}
        >
          {t("ADD_NEW_DEPOSIT")}
        </ButtonComponent>
      </Box>
    </>
  );
};

export default AddDepositSuccess;
