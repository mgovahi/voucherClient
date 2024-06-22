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
import FormErrorHelperText from "app/shared-components/FormErrorHelperText/FormErrorHelperText";
import { urlValidatorPattern } from "@fuse/utils/validations";

const ApiInformation = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState({
    pass: true,
    confirm: true,
  });
  const isFetching = false;
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      apiKey: '2a49n-2k0-3b5g69j001s-2p9-1k8u7',
      url: ""
    },
  });

  const { direction } = useSelector(selectFuseCurrentSettings);

  const onSubmit = (data) => {
    console.log({ ...data });
  };

  return (
    <Paper className="w-full">
      <FusePageSimpleHeader
        header={t("API_INFORMATION")}
      ></FusePageSimpleHeader>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-y-[44px] px-20 pt-[24px] pb-[40px]"
        autoComplete= "off"
      >
        <Box className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[50px] md:gap-x-[100px] gap-y-32">
          <FormControl>
            <Controller
              name="apiKey"
              control={control}
              rules={{
                // required: { value: true, message: t("FIELD_ERROR_MESSAGE") },
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  type={showPassword.pass ? "password" : "text"}
                  value={value}
                  disabled
                  // autoComplete="new-password"
                  InputProps={{
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
                        {showPassword.pass ? (
                          <FuseSvgIcon
                            color="white"
                          >
                            heroicons-outline:eye
                          </FuseSvgIcon>
                        ) : (
                          <FuseSvgIcon
                            color="white"
                          >
                            heroicons-outline:eye-off
                          </FuseSvgIcon>
                        )}
                      </IconButton>
                    ),
                  }}
                  // error={errors.apiKey}
                  label={t("API_KEY")}
                  helperText={t("API_KEY_HELPER_TEXT")}
                />
              )}
            />
            {/* <FormErrorHelperText error={errors.apiKey} /> */}
          </FormControl>
          <FormControl>
            <Controller
              name="url"
              control={control}
              rules={{
                pattern: {
                  value: urlValidatorPattern,
                  message: t("WEBSITE_ERROR"),
                },
              }}
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
                  readonly
                  // autoComplete="off"
                  InputProps={{
                    startAdornment: direction === "ltr" && (
                      <InputAdornment>
                        <Typography variant="body2" color="text.primary">
                          https://
                        </Typography>
                      </InputAdornment>
                    ),
                    endAdornment: direction === "rtl" && (
                      <InputAdornment sx={{ direction: "rtl" }}>
                        <Typography variant="body2" color="text.primary">
                          https://
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                  error={errors.url}
                  label={t("WEBSITE_OPTIONAL")}
                  helperText={t("WEBSITE_HELPER_TEXT")}
                />
              )}
            />
            <FormErrorHelperText error={errors.url} />
          </FormControl>
        </Box>
        <ButtonComponent
          className={`rtl:mr-auto ltr:ml-auto ${isFetching && `gap-12`}`}
          variant="contained"
          color="primary"
          type="submit"
          disabled={!isValid}
          loading={isFetching}
          isLoading={isFetching}
          loadingPosition="end"
          endIcon={<FuseSvgIcon>mv-icons:icon-Check</FuseSvgIcon>}
        >
          {t("SAVE_INFO")}
        </ButtonComponent>
      </form>
    </Paper>
  );
};

export default ApiInformation;
