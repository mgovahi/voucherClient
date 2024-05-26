import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Alert,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useForm, Controller } from "react-hook-form";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
function AddClientForm({ info = {}, onCancelClick }) {
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
      <Box className="grid grid-cols-2 mt-16 flex gap-x-[64px] gap-y-[20px]">
        <FormControl>
          <Controller
            name="fisrtName"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                sx={{ flex: 1 }}
                onChange={onChange}
                value={value}
                InputProps={{
                  autocomplete: "off",
                }}
                label={t("NAME")}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            name="lastName"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                sx={{ flex: 1 }}
                onChange={onChange}
                value={value}
                InputProps={{
                  autocomplete: "off",
                }}
                label={t("LAST_NAME")}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            name="mobile"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                sx={{ flex: 1 }}
                onChange={onChange}
                value={value}
                InputProps={{
                  autocomplete: "off",
                }}
                label={t("MOBILE")}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                sx={{ flex: 1 }}
                onChange={onChange}
                value={value}
                InputProps={{
                  autocomplete: "off",
                }}
                label={t("EMAIL")}
              />
            )}
          />
        </FormControl>
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
          mt: "20px",
        }}
      >
        <Typography className={"text-[14px] font-bold"} variant="h6">
          {t("CHANGE_PASSWORD")}
        </Typography>
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

export default AddClientForm;
