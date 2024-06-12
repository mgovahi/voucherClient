import React, { useState } from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import {
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
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, useTheme } from "@mui/system";
import NumericFormat from "react-number-format";
import PN from "persian-number";
import BankAndAccountNumber from "./BankAndAccountNumber";
import FileUploaderSingle from "@fuse/core/FileUploader";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import FormErrorHelperText from "app/shared-components/FormErrorHelperText/FormErrorHelperText";
import { selectCurrentLanguageDirection } from "app/store/i18nSlice";
import { useSelector } from "react-redux";
import { toWords } from "number-to-words";

const AddDepositForm = ({ onShowPage }) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const { t } = useTranslation();
  const theme = useTheme();
  const langDirection = useSelector(selectCurrentLanguageDirection);

  const validateImage = (file) => {
    if (file.size > 1024 * 1024) {
      return t("FILE_SIZE_ERROR");
    }
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
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
      label: "PAYA",
      value: "paya",
    },
    {
      label: "SATNA",
      value: "satna",
    },
    {
      label: "POL",
      value: "pol",
    },
  ];

  const loading = false;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-36">
      <Box className="grid gap-14">
        <Box>
          <Typography variant="body3" className="font-bold">
            {t("DEPOSIT_AMOUNT_TOMAN")}
          </Typography>
        </Box>
        <Grid
          container
          columnSpacing={{ md: "100px", xs: "50px" }}
          rowSpacing={{ xs: "32px", md: 0 }}
          className="h-auto md:h-68"
          alignItems="start"
        >
          <Grid item xs={12} md={6}>
            <FormControl className="w-full">
              <Controller
                name="depositAmount"
                control={control}
                rules={{
                  required: { value: true, message: t("FIELD_ERROR_MESSAGE") },
                }}
                render={({
                  field: { value, onChange, onBlur, ref, ...field },
                }) => (
                  <Box display="flex" alignItems="center">
                    <NumericFormat
                      value={value}
                      defaultValue={0}
                      onValueChange={(values) => onChange(values.floatValue)}
                      customInput={TextField}
                      inputProps={{ min: 0, defaultValue: 0 }}
                      sx={{
                        flex: 1,
                        ".MuiFormHelperText-contained": {
                          textTransform: "capitalize",
                        },
                        ".MuiInputBase-formControl": {
                          minHeight: "48px",
                          maxHeight: "48px",
                        },
                      }}
                      InputProps={{
                        inputProps: { style: { direction: "ltr" } },
                        startAdornment: (
                          <IconButton onClick={() => onChange(value + 1)}>
                            <AddIcon />
                          </IconButton>
                        ),
                        endAdornment: (
                          <IconButton onClick={() => onChange(value - 1)}>
                            <RemoveIcon />
                          </IconButton>
                        ),
                      }}
                      thousandSeparator
                      allowNegative={false}
                      error={errors.depositAmount}
                      helperText={
                        value === 0
                          ? t("ZERO_TOMAN")
                          : value
                          ? langDirection === "rtl"
                            ? `${PN.convert(value)} ${t("TOMAN")}`
                            : `${toWords(value)} ${t("TOMAN")}`
                          : ""
                      }
                    />
                  </Box>
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
              60.400 {t("TOMAN")}
            </Typography>
            <Typography
              variant="body2"
              color={theme.palette.text.grayV}
              className="font-bold"
            >
              {t("ALLOCATED_CREDIT")}:
            </Typography>
            <Typography variant="body2" className="font-bold">
              $17
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="grid gap-14">
        <Box>
          <Typography variant="body3" className="font-bold">
            {t("BANK_AND_ACCOUNT_NUMBER")}
          </Typography>
        </Box>
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
                    >
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

      <Box className="grid gap-14">
        <Box>
          <Typography variant="body3" className="font-bold">
            {t("ATTACHED_FILE")}
          </Typography>
        </Box>
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
          {t("ADD_DEPOSIT")}
        </ButtonComponent>
      </Box>
    </form>
  );
};

export default AddDepositForm;
