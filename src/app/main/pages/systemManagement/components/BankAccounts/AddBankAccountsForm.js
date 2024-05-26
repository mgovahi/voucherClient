import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, FormControl, TextField, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useForm, Controller } from "react-hook-form";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

const AddBankAccountsForm = ({ onAddAccount, onShowModal }) => {
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

  const onSubmit = (data) => {
    onAddAccount((prevData) => {
      return {
        ...prevData,
        list: [
          ...prevData.list,
          {
            id: prevData.list.length + 1,
            accountNumber: data.accountNumber,
            bank: data.bankName,
            status: "ACTIVE",
          },
        ],
      };
    });
    reset({ accountNumber: "", bankName: "" });
    onShowModal();
  };

  return (
    <Box className="w-full mt-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="grid grid-cols-2 h-256 gap-x-80">
          <FormControl>
            <Controller
              name="accountNumber"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  value={value}
                  InputProps={{
                    autocomplete: "off",
                  }}
                  label={t("ACCOUNT_NUMBER")}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="bankName"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  sx={{ flex: 1 }}
                  onChange={onChange}
                  value={value}
                  InputProps={{
                    autocomplete: "off",
                  }}
                  label={t("BANK_NAME")}
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
            type="submit"
            isLoading={loading}
            endIcon={
              loading ? (
                <CircularProgress size={16} sx={{ color: "#fff" }} />
              ) : (
                <FuseSvgIcon color={theme.palette.common.white} size={20}>
                  mv-icons:icon-Add
                </FuseSvgIcon>
              )
            }
          >
            {t("ADD_ACCOUNT")}
          </ButtonComponent>
        </Box>
      </form>
    </Box>
  );
};

export default AddBankAccountsForm;
