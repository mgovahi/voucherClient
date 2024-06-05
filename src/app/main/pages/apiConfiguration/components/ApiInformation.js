import React from "react";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectFuseCurrentSettings } from "app/store/mv/settingsSlice";

const ApiInformation = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState({
    pass: true,
    confirm: true,
  });
  const isFetching = false;
  const { control, formState, handleSubmit, reset, getValues } = useForm({
    mode: "onChange",
  });

  const { direction } = useSelector(selectFuseCurrentSettings);

  console.log("direction", direction === "ltr");

  const onApproveClick = () => {};

  return (
    <Paper className="w-full">
      <FusePageSimpleHeader
        header={t("API_INFORMATION")}
      ></FusePageSimpleHeader>
      <Box className="grid gap-y-[44px] px-20 pt-[24px] pb-[40px]">
        <Box className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[50px] md:gap-x-[100px] gap-y-32">
          <FormControl>
            <Controller
              name="passwordApi"
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
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          width: "70px",
                          borderRadius: "6px",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                          },
                        }}
                      >
                        <FuseSvgIcon
                          sx={{
                            stroke: "transparent !important",
                          }}
                          color="white"
                        >
                          mv-icons:icon-View
                        </FuseSvgIcon>
                      </IconButton>
                    ),
                  }}
                  label={t("API_KEY")}
                  helperText={t("API_KEY_HELPER_TEXT")}
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
                  sx={{
                    flex: 1,
                    ".MuiOutlinedInput-input": direction === "rtl" && {
                      direction: "rtl",
                      marginRight: "0 !important",
                    },
                  }}
                  type="text"
                  onChange={onChange}
                  value={value}
                  InputProps={{
                    startAdornment: direction === "ltr" && (
                      <InputAdornment>
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.primary }}
                        >
                          https://
                        </Typography>
                      </InputAdornment>
                    ),
                    endAdornment: direction === "rtl" && (
                      <InputAdornment sx={{ direction: "rtl" }}>
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.primary }}
                        >
                          https://
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                  label={t("WEBSITE_OPTIONAL")}
                  helperText={t("WEBSITE_HELPER_TEXT")}
                />
              )}
            />
          </FormControl>
        </Box>
        <ButtonComponent
          className={`rtl:mr-auto ltr:ml-auto ${isFetching && `gap-12`}`}
          onClick={onApproveClick}
          variant="contained"
          color="primary"
          loading={isFetching}
          isLoading={isFetching}
          loadingPosition="end"
          endIcon={<FuseSvgIcon>mv-icons:icon-Check</FuseSvgIcon>}
        >
          {t("SAVE_INFO")}
        </ButtonComponent>
      </Box>
    </Paper>
  );
};

export default ApiInformation;
