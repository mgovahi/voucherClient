import {
  Grid,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import CustomFormControlLabel from "./CustomFormControlLabel";

const BankAndAccountNumber = ({ field }) => {
  const [checkedValue, setCheckedValue] = useState("");

  const handleChange = (event) => {
    setCheckedValue(event.target.value);
  };

  const handleCardClick = (value) => {
    setCheckedValue(value);
  };

  return (
    <RadioGroup {...field} row value={checkedValue} onChange={handleChange}>
      <Grid container spacing={2}>
        {mockData.map((item, index) => {
          return (
            <Grid key={index} item xs={4}>
              <CustomFormControlLabel
                checkedValue={checkedValue}
                bankName={item.bankName}
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
    bankName: "بانک پاسارگاد",
    accountNumber: "1234-800-123456-1",
  },
  {
    bankName: "بانک تجارت",
    accountNumber: "200123456",
  },
  {
    bankName: "بانک ایران‌زمین",
    accountNumber: "200-707-123456-1",
  },
];
