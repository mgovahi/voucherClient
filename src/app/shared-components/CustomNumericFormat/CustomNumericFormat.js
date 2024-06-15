import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import NumericFormat from "react-number-format";
import { useTranslation } from "react-i18next";
import PN from "persian-number";
import { toWords } from "number-to-words";
import { selectCurrentLanguageDirection } from "app/store/i18nSlice";
import { useSelector } from "react-redux";

const CustomNumericFormat = ({ value, errors, helperText, onChange }) => {
  const { t } = useTranslation();
  const langDirection = useSelector(selectCurrentLanguageDirection);
  const [number, setNumber] = useState(value ? value : 0);

  return (
    <NumericFormat
      value={number}
      defaultValue={number}
      onValueChange={(values) => {
        onChange(values.floatValue);
        setNumber(values.floatValue);
      }}
      customInput={TextField}
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
        inputProps: {
          style: { direction: "ltr" },
          minLength: 0,
          maxLength: 27,
        },
        startAdornment: (
          <IconButton
            onClick={() => {
              onChange(value + 1);
              setNumber((prev) => prev + 1);
            }}
          >
            <AddIcon />
          </IconButton>
        ),
        endAdornment: (
          <IconButton
            onClick={() => {
              onChange(value - 1);
              setNumber((prev) => prev - 1);
            }}
            disabled={number === 0}
          >
            <RemoveIcon />
          </IconButton>
        ),
      }}
      thousandSeparator
      allowNegative={false}
      error={errors}
      helperText={
        helperText &&
        (value === 0
          ? t("ZERO_TOMAN")
          : value
          ? langDirection === "rtl"
            ? `${PN.convert(value)} ${t("TOMAN")}`
            : `${toWords(value)} ${t("TOMAN")}`
          : "")
      }
    />
  );
};

export default CustomNumericFormat;
