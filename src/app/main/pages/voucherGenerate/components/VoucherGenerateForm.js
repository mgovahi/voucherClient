import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
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
import React from "react";
import { Controller } from "react-hook-form";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, useTheme } from "@mui/system";
import NumericFormat from "react-number-format";
import { useForm } from "react-hook-form";
import FormErrorHelperText from "app/shared-components/FormErrorHelperText/FormErrorHelperText";

import { useTranslation } from "react-i18next";
const VoucherGenerateForm = () => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
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
            {" "}
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
        <FormControl className="w-full">
          <Controller
            name="depositAmount"
            control={control}
            rules={{
              required: { value: true, message: t("FIELD_ERROR_MESSAGE") },
            }}
            render={({ field: { value, onChange, onBlur, ref, ...field } }) => (
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
                  // helperText={
                  //   value === 0
                  //     ? t("ZERO_TOMAN")
                  //     : value
                  //     ? langDirection === "rtl"
                  //       ? `${PN.convert(value)} ${t("TOMAN")}`
                  //       : `${toWords(value)} ${t("TOMAN")}`
                  //     : ""
                  // }
                />
              </Box>
            )}
          />
          <FormErrorHelperText error={errors.depositAmount} />
        </FormControl>
      </form>
    </>
  );
};

export default VoucherGenerateForm;
