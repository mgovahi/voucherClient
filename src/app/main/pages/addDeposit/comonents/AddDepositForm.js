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

const AddDepositForm = ({onShowPage}) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const { t } = useTranslation();
  const theme = useTheme();
  const onSubmit = (data) => {
    console.log(data, "data");
    onShowPage()
  };

  const depositTypeMap = [
    {
      label: "پایا",
      value: "paya",
    },
    {
      label: "ساتنا",
      value: "satna",
    },
    {
      label: "پل",
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
          columnSpacing="100px"
          className="h-68"
          alignItems="start"
        >
          <Grid item xs={6}>
            <FormControl className="w-full">
              <Controller
                name="depositAmount"
                control={control}
                rules={{
                  required: true,
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
                          ? "صفر تومان"
                          : value
                          ? `${PN.convert(value)} تومان`
                          : ""
                      }
                    />
                  </Box>
                )}
              />
              {errors.depositAmount && (
                <FormHelperText error={errors.depositAmount}>
                  {t("FIELD_ERROR_MESSAGE")}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid
            item
            xs={6}
            className="grid grid-rows-2 grid-cols-8 items-center"
          >
            <Box className="bg-[#f1ecfc] rounded-full w-44 h-44 flex justify-center items-center row-span-2 col-span-1">
              <FuseSvgIcon
                size={50}
              >
                mv-icons-mc:icon-Dollar
              </FuseSvgIcon>
            </Box>
            <Typography
              variant="body2"
              color={theme.palette.text.grayV}
              className="col-span-3"
            >
              {t("PAYMENT_DOLLAR")}:
            </Typography>
            <Typography variant="body2" className="font-bold col-span-4">
              ۶۰.۴۰۰ تومان
            </Typography>
            <Typography
              variant="body2"
              color={theme.palette.text.grayV}
              className="col-span-3"
            >
              {t("ALLOCATED_CREDIT")}:
            </Typography>
            <Typography variant="body2" className="font-bold col-span-4">
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
              required: true,
              // validate: isValidIpHandle,
            }}
            render={({ field }) => (
              <BankAndAccountNumber
                field={field}
                error={errors.bankAndAccountNumber}
              />
            )}
          />
          {errors.bankAndAccountNumber && (
            <FormHelperText error={!!errors.bankAndAccountNumber}>
              {t("FIELD_ERROR_MESSAGE")}
            </FormHelperText>
          )}
        </FormControl>
      </Box>

      <Grid container columnSpacing="100px">
        <Grid item xs={6}>
          <FormControl className="w-full">
            <Controller
              name="depositType"
              control={control}
              rules={{
                required: true,
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
            {errors.depositType && (
              <FormHelperText error={errors.depositType}>
                {t("FIELD_ERROR_MESSAGE")}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
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
              required: true,
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
