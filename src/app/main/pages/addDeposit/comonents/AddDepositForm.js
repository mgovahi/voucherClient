import React, { useState } from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, useTheme } from "@mui/system";
import NumericFormat from "react-number-format";

const AddDepositForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const { t } = useTranslation();
  const theme = useTheme();

  const [depositValue, setDepositValue] = useState(0);

  const onSubmit = (data) => {};

  const handleChange = (event) => {
    console.log(event?.target?.value);
    setDepositValue(event?.target?.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <FormControl className="w-full">
            <Controller
              name="deposit"
              control={control}
              rules={{
                required: true,
                // validate: isValidIpHandle,
              }}
              render={({
                field: { value, onChange, onBlur, ref, ...field },
              }) => (
                <Box display="flex" alignItems="center">
                  <InputLabel
                    shrink
                    htmlFor="deposit"
                    className="text-18 font-bold -right-10 top-10"
                  >
                    {t("DEPOSIT_AMOUNT_TOMAN")}
                  </InputLabel>
                  <NumericFormat
                    value={value}
                    onValueChange={(values) => onChange(values.floatValue)}
                    customInput={TextField}
                    inputProps={{ min: 0, defaultValue: 0 }}
                    sx={{
                      flex: 1,
                      marginTop: "30px",
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
                    error={!!errors.deposit}
                    thousandSeparator
                    allowNegative={false}
                  />
                </Box>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Box className="bg-[#f1ecfc] rounded-full w-44 h-44 flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                fill={theme.palette.primary.main}
              />
            </svg>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddDepositForm;
