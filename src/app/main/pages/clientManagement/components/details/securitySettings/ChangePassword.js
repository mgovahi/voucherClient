import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Typography,
  Alert,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import FusePageSimple from "@fuse/core/FusePageSimple";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { useForm, Controller } from "react-hook-form";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

function ChangePassword({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState({
    pass: true,
    confirm: true,
  });
  const loading = false;
  const { control, formState, handleSubmit, reset, getValues } = useForm({
    mode: "onChange",
  });
  return (
    <Box className="w-full">
      <FusePageSimpleHeader
        header={t("CHANGE_PASSWORD")}
        inner
      ></FusePageSimpleHeader>
      <Alert
        severity="warning"
        className="items-start"
        icon={
          <FuseSvgIcon sx={{ stroke: "transparent !important" }}>
            mv-icons-mc:icon-AlertInfo
          </FuseSvgIcon>
        }
        sx={{
          mt: "40px",
          " p": {
            lineHeight: "20px",
            "&:before": {
              content: "''",
              display: "inline-block",
              width: "4px",
              height: "4px",
              background: "currentColor",
              borderRadius: "50%",
              marginRight: "5px",
            },
          },
        }}
      >
        <Typography className={"text-[14px] font-bold"} variant="h6">
          {t("CHANGE_PASSWORD")}
        </Typography>
        <Typography>{t("CHANGE_PASS_HINT1")}</Typography>
        <Typography>{t("CHANGE_PASS_HINT2")}</Typography>
      </Alert>
      <Box className=" mt-[20px]">
        <Box className="grid grid-cols-2 mt-16 flex gap-x-[64px] gap-y-[20px]">
          <FormControl>
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  type={showPassword.pass ? "password" : "text"}
                  value={value}
                  InputProps={{
                    autocomplete: "off",
                    endAdornment: (
                      <IconButton
                        onClick={() => {
                          setShowPassword({
                            ...showPassword,
                            pass: !showPassword.pass,
                          });
                        }}
                      >
                        <FuseSvgIcon sx={{ stroke: "transparent !important" }}>
                          mv-icons:icon-View
                        </FuseSvgIcon>
                      </IconButton>
                    ),
                  }}
                  label={t("PASSWORD")}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="passwordConfirm"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  type={showPassword.confirm ? "password" : "text"}
                  onChange={onChange}
                  value={value}
                  InputProps={{
                    autocomplete: "off",
                    endAdornment: (
                      <IconButton
                        onClick={() => {
                          setShowPassword({
                            ...showPassword,
                            confirm: !showPassword.confirm,
                          });
                        }}
                      >
                        <FuseSvgIcon sx={{ stroke: "transparent !important" }}>
                          mv-icons:icon-View
                        </FuseSvgIcon>
                      </IconButton>
                    ),
                  }}
                  label={t("PASSWORD_CONFIRM")}
                />
              )}
            />
          </FormControl>
        </Box>
        <Box className="flex justify-end gap-x-[20px] mt-20">
          <ButtonComponent
            sx={{
              width: { xs: "100%", sm: "fit-content" },
            }}
            onClick={onCancelClick}
            color="default"
            size="middle"
            variant="outlined"
            isLoading={loading}
            // disabled={loading}
          >
            {t("CANCEL")}
          </ButtonComponent>
          <ButtonComponent
            sx={{
              width: { xs: "100%", sm: "fit-content" },
            }}
            color="info"
            size="middle"
            variant="contained"
            isLoading={loading}
            // disabled={loading}
            endIcon={
              loading ? (
                <CircularProgress size={16} sx={{ color: "#fff" }} />
              ) : (
                <FuseSvgIcon color={theme.palette.common.white} size={20}>
                  mv-icons:icon-Check
                </FuseSvgIcon>
              )
            }
          >
            {t("SAVE_INFO")}
          </ButtonComponent>
        </Box>
      </Box>
    </Box>
  );
}

export default ChangePassword;
