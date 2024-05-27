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
} from "@mui/material";
import { useTheme } from "@mui/styles";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

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

  const onApproveClick = () => {};

  return (
    <Paper className="w-full">
      <FusePageSimpleHeader
        header={t("API_INFORMATION")}
      ></FusePageSimpleHeader>
      <Box className="grid gap-y-[44px] px-20 pt-[24px] pb-[40px]">
        <Box className="grid grid-cols-2 gap-x-[100px]">
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
                  sx={{ flex: 1 }}
                  type="text"
                  onChange={onChange}
                  value={value}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ direction: "rtl" }}
                      >
                        https://
                      </InputAdornment>
                    ),
                  }}
                  label={t("WEBSITE")}
                  helperText={t("WEBSITE_HELPER_TEXT")}
                />
              )}
            />
          </FormControl>
        </Box>
        <ButtonComponent
          className={`mr-auto ${isFetching && `gap-12`}`}
          onClick={onApproveClick}
          variant="contained"
          color="primary"
          loading={isFetching}
          isLoading={isFetching}
          loadingPosition="end"
          endIcon={<FuseSvgIcon>mv-icons:icon-Check</FuseSvgIcon>}
          disabled
        >
          {t("SAVE_INFO")}
        </ButtonComponent>
      </Box>
    </Paper>
  );
};

export default ApiInformation;
