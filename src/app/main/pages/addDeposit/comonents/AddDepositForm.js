import React, { useState } from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Box, useTheme } from "@mui/system";
import BankAndAccountNumber from "./BankAndAccountNumber";
import FileUploaderSingle from "@fuse/core/FileUploader";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import FormErrorHelperText from "app/shared-components/FormErrorHelperText/FormErrorHelperText";
import { selectCurrentLanguageDirection } from "app/store/i18nSlice";
import { useSelector } from "react-redux";
import PN from "persian-number";
import { toWords } from "number-to-words";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import CustomNumericFormat from "app/shared-components/CustomNumericFormat/CustomNumericFormat";

const AddDepositForm = ({ onShowPage }) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
  });
  const { t } = useTranslation();
  const theme = useTheme();
  const langDirection = useSelector(selectCurrentLanguageDirection);

  const paymentDollar = 60.4;

  const validateImage = (file) => {

    if (file.size && file.size > 1024 * 1024) {
      return t("FILE_SIZE_ERROR");
    }
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (file.type && !allowedTypes.includes(file.type)) {
      return t("FILE_TYPE_ERROR");
    }
    return true;
  };

  const onSubmit = (data) => {
    console.log(data, "data");
    onShowPage();
  };

  const depositTypeMap = [
    {
      label: "BANK_DEPOSIT_SLIP",
      value: "bandDepositSlip",
    },
    {
      label: "INTERBANK_PAYMENT_SYSTEM",
      value: "interbankPaymentSystem",
    },
  ];

  const loading = false;

  const depositAmountValue = watch("depositAmount");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-36">
      <Box className="">
        <FusePageSimpleHeader
          header={
            <>
              {t("DEPOSIT_AMOUNT")}{" "}
              <span className="text-12">({t("TOMAN")})</span>
            </>
          }
          inner
          className="noBorder"
        ></FusePageSimpleHeader>
        <Grid
          container
          columnSpacing={{ md: "100px", xs: "50px" }}
          rowSpacing={{ xs: "32px", md: 0 }}
          className="h-auto md:h-68"
          alignItems="start"
        >
          <Grid item xs={12} md={6}>
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
                    helperText={
                      value === 0
                        ? t("ZERO_TOMAN")
                        : value
                        ? langDirection === "rtl"
                          ? `${PN.convert(value)} ${t("TOMAN")}`
                          : `${toWords(value)} ${t("TOMAN")}`
                        : ""
                    }
                    onChange={onChange}
                  />
                )}
              />
              <FormErrorHelperText error={errors.depositAmount} />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ gridTemplateColumns: { xs: "60px 200px auto" } }}
            className="grid grid-rows-2 items-center"
          >
            <Box className="bg-[#f1ecfc] rounded-full w-44 h-44 flex justify-center items-center row-span-2">
              <FuseSvgIcon size={50}>mv-icons-mc:icon-Icon-dollar</FuseSvgIcon>
            </Box>
            <Typography
              variant="body2"
              color={theme.palette.text.grayV}
              className="font-bold"
            >
              {t("PAYMENT_DOLLAR")}:
            </Typography>
            <Typography variant="body2" className="font-bold">
              {paymentDollar} {t("TOMAN")}
            </Typography>
            <Typography
              variant="body2"
              color={theme.palette.text.grayV}
              className="font-bold"
            >
              {t("ALLOCATED_CREDIT")}:
            </Typography>
            <Typography
              variant="body2"
              className="font-bold"
              fontFamily="iranYekanXNumEn"
            >
              $
              {depositAmountValue
                ? parseFloat(depositAmountValue / paymentDollar).toFixed(2)
                : 0}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="">
        <FusePageSimpleHeader
          header={t("BANK_AND_ACCOUNT_NUMBER")}
          inner
          className="noBorder"
        ></FusePageSimpleHeader>
        <FormControl className="w-full">
          <Controller
            name="bankAndAccountNumber"
            control={control}
            rules={{
              required: { value: true, message: t("FIELD_ERROR_MESSAGE") },
              // validate: isValidIpHandle,
            }}
            render={({ field }) => (
              <BankAndAccountNumber
                field={field}
                error={errors.bankAndAccountNumber}
              />
            )}
          />
          <FormErrorHelperText error={errors.bankAndAccountNumber} />
        </FormControl>
      </Box>

      <Grid
        container
        columnSpacing={{ md: "100px", xs: "50px" }}
        rowSpacing={{ xs: "16px", sm: 0 }}
      >
        <Grid item xs={12} sm={6}>
          <FormControl className="w-full">
            <Controller
              name="depositType"
              control={control}
              rules={{
                required: { value: true, message: t("FIELD_ERROR_MESSAGE") },
              }}
              render={({ field: { value, onChange, onBlur } }) => {
                return (
                  <>
                    <InputLabel>{t("DEPOSIT_TYPE")}</InputLabel>
                    <Select
                      label={t("DEPOSIT_TYPE")}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={onChange}
                      value={value}
                      error={errors.depositType}
                      defaultValue={"-1"}
                    >
                      <MenuItem disabled value="-1">
                        {t("SELECT")}
                      </MenuItem>
                      {depositTypeMap.map((type, i) => (
                        <MenuItem key={`type_${i}`} value={type.value}>
                          {t(type.label)}
                        </MenuItem>
                      ))}
                    </Select>
                  </>
                );
              }}
            />
            <FormErrorHelperText error={errors.depositType} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className="w-full">
            <Controller
              name="description"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  sx={{
                    flex: 1,
                  }}
                  label={t("DESCRIPTION_OPTIONAL")}
                />
              )}
            />
          </FormControl>
        </Grid>
      </Grid>

      <Box className="">
        <FusePageSimpleHeader
          header={t("ATTACHED_FILE")}
          inner
          className="noBorder"
        ></FusePageSimpleHeader>
        <FormControl className="w-full">
          <Controller
            name="attachedFile"
            control={control}
            rules={{
              required: { value: true, message: t("FIELD_ERROR_MESSAGE") },
              validate: validateImage,
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <FileUploaderSingle
                readOnly={true}
                value={value}
                onChange={onChange}
                error={errors.attachedFile}
                helperText="UPLOADER_HELPER_TEXT"
                loading={loading}
              />
            )}
          />
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
          disabled={!isValid}
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
          <span className="mt-4"> {t("ADD_DEPOSIT")}</span>
        </ButtonComponent>
      </Box>
    </form>
  );
};

export default AddDepositForm;
