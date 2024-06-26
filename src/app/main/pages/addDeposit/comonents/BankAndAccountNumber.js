import {
  Grid,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import CustomFormControlLabel from "./CustomFormControlLabel";

const BankAndAccountNumber = ({ field, error }) => {
  const [checkedValue, setCheckedValue] = useState(field.value);

  const handleChange = (event) => {
    field.onChange(event.target.value); // update form state
    setCheckedValue(event.target.value);  };

  const handleCardClick = (value) => {
    setCheckedValue(value);
    field.onChange(value); // update form state
  };

  return (
    <RadioGroup {...field} row value={checkedValue} onChange={handleChange}>
      <Grid container spacing={2}>
        {mockData.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={4}>
              <CustomFormControlLabel
                checkedValue={checkedValue}
                bankName={item.bankName}
                error={!!error}
                accountNumber={item.accountNumber}
                onCardClick={() => handleCardClick(item.accountNumber)}
              />
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
};

export default BankAndAccountNumber;

const mockData = [
  {
    bankName: "PASARGAD_BANK",
    accountNumber: "1234-800-123456-1",
  },
  {
    bankName: "TEJARAT_BANK",
    accountNumber: "200123456",
  },
  {
    bankName: "IRAN_ZAMIN_BANK",
    accountNumber: "200-707-123456-1",
  },
];
