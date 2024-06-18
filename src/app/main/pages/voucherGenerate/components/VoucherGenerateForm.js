import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import {
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { Box, useTheme } from "@mui/system";
import { useForm } from "react-hook-form";
import FormErrorHelperText from "app/shared-components/FormErrorHelperText/FormErrorHelperText";
import { useTranslation } from "react-i18next";
import CustomNumericFormat from "app/shared-components/CustomNumericFormat/CustomNumericFormat";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
const VoucherGenerateForm = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const loading = false;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box className="grid gap-[34px]">
      <Box
        className="flex gap-[15px] items-center justify-between"
        sx={{
          backgroundColor: "primary.light",
          padding: "24px",
          borderRadius: "6px",
          // gridTemplateColumns: "200px auto"
        }}
      >
        <Box>
          <FusePageSimpleHeader
            header={t("YOUR_BALANCE") + ":"}
            inner
            className="noBorder mb-10"
          ></FusePageSimpleHeader>
          <Box className="flex items-center gap-[15px]">
            <FuseSvgIcon className="" size={48}>
              mv-icons-mc:icon-Balance
            </FuseSvgIcon>
            <Typography
              variant="body4"
              className="font-bold"
              color="custome.darkWall"
              fontFamily="IRANYekanX"
            >
              $8,942
            </Typography>
          </Box>
        </Box>
        <img className="w-120" src="/assets/images/balance.png" />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-36">
        <Box className="w-2/4">
          <FusePageSimpleHeader
            header={
              <>
                {t("VOUCHER_AMOUNT")}{" "}
                <span className="text-12">({t("USD")})</span>
              </>
            }
            inner
            className="noBorder"
          ></FusePageSimpleHeader>
          <FormControl
            className="w-full"
            sx={{ ".MuiTextField-root": { borderRadius: "6px" } }}
          >
            <Controller
              name="depositAmount"
              control={control}
              rules={{
                required: { value: true, message: t("FIELD_ERROR_MESSAGE") },
              }}
              render={({
                field: { value, onChange, onBlur, ref, ...field },
              }) => (
                <CustomNumericFormat
                  value={value}
                  errors={errors.depositAmount}
                  onChange={onChange}
                  helperText={t("VOUCHER_AMOUNT_HELPER_TEXT")}
                />
              )}
            />
            <FormErrorHelperText error={errors.depositAmount} />
          </FormControl>
        </Box>
        <Box className="flex justify-end mt-20">
          <ButtonComponent
            sx={{
              width: { xs: "100%", sm: "fit-content" },
            }}
            color="primary"
            size="middle"
            variant="contained"
            type="submit"
            isLoading={loading}
            // disabled={!isValid}
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
            {t("VOUCHER_GENERATE")}
          </ButtonComponent>
        </Box>
      </form>
    </Box>
  );
};

export default VoucherGenerateForm;
