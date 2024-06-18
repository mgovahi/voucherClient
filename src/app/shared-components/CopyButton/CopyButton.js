import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Tooltip } from "@mui/material";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { styled, useTheme } from "@mui/styles";

const CopyButton = ({ voucherCode }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const onChangeField = (event) => {
    setInputValue(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode).then(() => {
      setCopied(true);
      setShowTooltip(true);

      setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 300000);
    });
  };

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .MuiTooltip-tooltip`]: {
      fontSize: '14px',
      padding: "5px 20px"
    },
  });

  return (
    <>
      <CustomTooltip
        title={t("COPY_TOOLTIP")}
        open={showTooltip}
        onClose={() => setShowTooltip(false)}
        leaveDelay={300000}
        arrow
      >
        <Button
          onClick={handleCopy}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: theme.palette.custome.white,
            color: theme.palette.text.primary,
            fontWeight: "bold",
            border: `1px solid ${copied ? theme.palette.success.main : theme.palette.primary.main}`,
            width: "240px",
            justifyContent: "space-between"
          }}
          endIcon={
            copied ? (
              <FuseSvgIcon>mv-icons:icon-Check</FuseSvgIcon>
            ) : (
              <FuseSvgIcon
                sx={{
                  stroke: "none !important",
                  fill: theme.palette.primary.main + "!important",
                }}
              >
                mv-icons:icon-Copy
              </FuseSvgIcon>
            )
          }
        >
          {voucherCode}
        </Button>
      </CustomTooltip>
    </>
  );
};

export default CopyButton;
