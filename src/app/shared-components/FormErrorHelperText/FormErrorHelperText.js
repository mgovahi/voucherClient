import { FormHelperText } from "@mui/material";
import React from "react";

const FormErrorHelperText = ({ error }) => {
  return (
    error && <FormHelperText error={error}>{error.message}</FormHelperText>
  );
};

export default FormErrorHelperText;
