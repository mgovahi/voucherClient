import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import NumericFormat from "react-number-format";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

const CustomNumericFormat = ({ value, errors, helperText, onChange }) => {
  const [number, setNumber] = useState(value ? value : 0);

  const handleIncrement = () => {
    const newValue = number === "" ? 0 : number + 1;
    onChange(newValue);
    setNumber(newValue);
  };

  const handleDecrement = () => {
    const newValue = number === "" ? 0 : number - 1;
    onChange(newValue);
    setNumber(newValue);
  };

  return (
    <NumericFormat
      value={number}
      defaultValue={number}
      onValueChange={(values) => {
        const newValue = values.floatValue !== undefined ? values.floatValue : "";
        onChange(newValue);
        setNumber(newValue);
      }}
      customInput={TextField}
      sx={{
        flex: 1,
        backgroundColor: "custome.cyanBlueLight",
        ".MuiOutlinedInput-input": {
          backgroundColor: "custome.cyanBlueLight",
          fontWeight: "bold",
          fontSize: "16px",
          height: "100%",
          padding: 0,
        },
        ".MuiFormHelperText-contained": {
          textTransform: "capitalize",
          backgroundColor: "white",
          margin: "0",
          padding: "3px 14px 0 14px",
        },
        ".MuiInputBase-formControl": {
          minHeight: "48px",
          maxHeight: "48px",
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "custome.cyanBlueLight",
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
          onClick={handleIncrement}
          >
            <FuseSvgIcon>mv-icons-mc:icon-Plus-Square</FuseSvgIcon>
          </IconButton>
        ),
        endAdornment: (
          <IconButton
          onClick={handleDecrement} disabled={number === 0}
          >
            <FuseSvgIcon>mv-icons-mc:icon-Minus-Square</FuseSvgIcon>
          </IconButton>
        ),
      }}
      thousandSeparator
      allowNegative={false}
      error={errors}
      helperText={helperText}
    />
  );
};

export default CustomNumericFormat;
