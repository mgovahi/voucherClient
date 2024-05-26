import React from "react";
import CurrencyPriceDefinition from "./CurrencyPriceDefinition";
import CurrencyPriceHistory from "./CurrencyPriceHistory";

const CurrencyPrice = () => {
  return (
    <>
      <CurrencyPriceDefinition />
      <CurrencyPriceHistory header="REMITTANCE_CURRENCY_PRICE_HISTORY" chartHeader="VOUCHER_DOLLAR" />
      <CurrencyPriceHistory header="OFFICIAL_CURRENCY_PRICE_HISTORY" chartHeader="OFFICIAL_DOLLAR" />
    </>
  );
};

export default CurrencyPrice;
