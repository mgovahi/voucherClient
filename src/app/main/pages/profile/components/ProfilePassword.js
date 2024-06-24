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
  Paper,
  CircularProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import FusePageSimple from "@fuse/core/FusePageSimple";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import { useForm, Controller } from "react-hook-form";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import { srongPasswordPattern } from "@fuse/utils/validations";

function ProfilePassword({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState({
    pass: true,
    confirm: true,
  });
  const [loading, setLoading] = useState(false);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data, "data");
    setTimeout(() => {
      setLoading(false);
      reset();
    }, 2000);
  };

  // const handleKeyDown = (event) => {
  //   // Check if the pressed key is a number or backspace
  //   const isNumber = /^\d$/.test(event.key);
  //   const isBackspace = event.key === 'Backspace';

  //   // If the pressed key is not a number or backspace, prevent the default behavior (typing)
  //   if (!isNumber && !isBackspace) {
  //     event.preventDefault();
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid">
      <Box className="grid gap-14"></Box>
      <Paper
        className="gap-4 grid my-20"
        sx={{
          display: "flex",
          height: "600px",
        }}
      >
        <Box className="w-full">
          <Box className="gap-x-[24px] ">
            <Typography
              variant="body1"
              className="font-bold text-[18px] mt-20 px-20 mb-44"
              sx={{
                height: "66px",
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              {t("CHANGE_PASSWORD")}
            </Typography>
          </Box>
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
              marginRight: "20px",
              marginLeft: "20px",
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
            <Typography>{t("CHANGE_PASS_HINT2")}</Typography>
          </Alert>
          <Box className=" mt-[20px]">
            <Box className="grid md:grid-cols-2 xs:grid-cols-1 mt-44 gap-x-[100px] gap-y-[20px] mx-20 ">
              <FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: t("FIELD_ERROR_MESSAGE"),
                    pattern: {
                      value: srongPasswordPattern,
                      message: t("CHANGE_PASS_HINT2"),
                    },
                    minLength: {
                      value: 8,
                      message: t("CHANGE_PASS_HINT2"),
                    },
                  }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      sx={{ flex: 1 }}
                      onChange={onChange}
                      // onKeyDown={handleKeyDown} // Add key down event handler
                      type={showPassword.pass ? "password" : "text"}
                      value={value}
                      label={t("PASSWORD")}
                      error={!!errors.password}
                      helperText={
                        errors.password ? errors.password.message : ""
                      }
                      InputProps={{
                        autoComplete: "off",
                        endAdornment: (
                          <IconButton
                            onClick={() => {
                              setShowPassword({
                                ...showPassword,
                                pass: !showPassword.pass,
                              });
                            }}
                          >
                            {showPassword.pass ? (
                              <FuseSvgIcon>heroicons-outline:eye</FuseSvgIcon>
                            ) : (
                              <FuseSvgIcon>
                                heroicons-outline:eye-off
                              </FuseSvgIcon>
                            )}
                          </IconButton>
                        ),
                      }}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Controller
                  name="passwordConfirm"
                  control={control}
                  rules={{
                    required: t("FIELD_ERROR_MESSAGE"),
                    pattern: {
                      value: srongPasswordPattern,
                      message: t("CHANGE_PASS_HINT2"),
                    },
                    minLength: {
                      value: 8,
                      message: t("CHANGE_PASS_HINT2"),
                    },
                    validate: (val) => {
                      if (watch("password") != val) {
                        return t("PASSWORD_AND_CONFIRM_MISMATCH");
                      }
                    },
                  }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      sx={{ flex: 1 }}
                      onChange={onChange}
                      // onKeyDown={handleKeyDown} // Add key down event handler
                      type={showPassword.confirm ? "password" : "text"}
                      value={value}
                      label={t("PASSWORD_CONFIRM")}
                      error={!!errors.passwordConfirm}
                      helperText={
                        errors.passwordConfirm
                          ? errors.passwordConfirm.message
                          : ""
                      }

                      InputProps={{
                        autoComplete: "off",
                        endAdornment: (
                          <IconButton
                            onClick={() => {
                              setShowPassword({
                                ...showPassword,
                                confirm: !showPassword.confirm,
                              });
                            }}
                          >
                            {showPassword.confirm ? (
                              <FuseSvgIcon>heroicons-outline:eye</FuseSvgIcon>
                            ) : (
                              <FuseSvgIcon>
                                heroicons-outline:eye-off
                              </FuseSvgIcon>
                            )}
                          </IconButton>
                        ),
                      }}
                    />
                  )}
                />
              </FormControl>
            </Box>
            <Box className="flex justify-end gap-x-[20px] mt-[74px]  "
            
            sx={{
                 marginRight:"20px",
                 marginLeft:"20px"
                }}
            
            >
              <ButtonComponent
                sx={{
                  width: { xs: "100%", sm: "fit-content", lg: "162px" },
                  height: { xs: "100%", sm: "fit-content", lg: "38px" },
                }}
                color="primary"
                size="middle"
                variant="contained"
                type="submit"
                disabled={!isValid}
                isLoading={loading}
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
      </Paper>
    </form>
  );
}

export default ProfilePassword;
