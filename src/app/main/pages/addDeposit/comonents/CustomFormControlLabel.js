import { FormControlLabel, Typography, useRadioGroup } from "@mui/material";
import React from "react";
import CustomRadio from "./CustomRadio";
import { Box, useTheme } from "@mui/system";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// Custom FormControlLabel
const MyFormControlLabel = (props) => {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <FormControlLabel checked={checked} {...props} />;
};

MyFormControlLabel.propTypes = {
  value: PropTypes.any,
};

// Styled Box
const StyledBox = styled(Box)(({ theme }) => ({
  border: "2px solid",
  background: theme.palette.custome.cyanBlueLight,
  borderRadius: "6px",
  "&.hover": {
    cursor: "pointer",
  },
  ".MuiFormControlLabel-root": {
    alignItems: "flex-start",
    gap: "15px",
  },
}));

const CustomFormControlLabel = ({
  accountNumber,
  bankName,
  error,
  onCardClick,
  checkedValue,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();


  return (
    <StyledBox
      sx={{
        borderColor:
          checkedValue === accountNumber ? theme.palette.primary.main : error ? theme.palette.error.main : "#e4e6ef",
        background:
          checkedValue === accountNumber && theme.palette.primary.light,
      }}
      onClick={onCardClick}
    >
      <MyFormControlLabel
        value={accountNumber}
        sx={{width: "100%", height: "100%", padding: "24px"}}
        label={
          <Box display="flex" flexDirection="column" alignItems="flex-start" gap="8px">
            <Typography
              variant="body2"
              color={theme.palette.custome.darkSky}
              className="font-bold"
            >
              {accountNumber}
            </Typography>
            <Typography variant="body2" color={theme.palette.text.grayV}>
              {t(bankName)}
            </Typography>
          </Box>
        }
        control={<CustomRadio />}
      />
    </StyledBox>
  );
};

export default CustomFormControlLabel;
