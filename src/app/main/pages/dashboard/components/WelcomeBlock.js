import { memo } from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useNavigate } from "react-router-dom";

function WelcomeBlock({ description, amount, svgIcon, color }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Paper
        className="flex flex-col gap-4 p-[30px]"
        sx={{
          minHeight: "340px",
          width: "100%",
          backgroundColor: theme.palette.custome.blueDark,
          backgroundImage: "url(assets/images/logo/logoMark.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: useMediaQuery("(max-width:500px)") && "60%",
          color: theme.palette.common.white,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {t("WELCOME_TITLE")}
        </Typography>
        <Typography
          className="w-[50%] "
          sx={{
            lineHeight: "24px",
            color: "#b5b5c3",
          }}
        >
          {t("WELCOME_MESSAGE")}
        </Typography>

        <Button
          variant="text"
          color="yellow"
          className="w-fit p-0 mt-24"
          onClick={() => {
            navigate("/addDeposit");
          }}
        >
          {t("ADD_BALANCE")}
          <FuseSvgIcon
            className="rotate-90 ltr:rotate-[270deg]"
            size="16px"
            sx={{
              fill: "transparent !important",
              stroke: "currentColor",
              ml: "8px",
            }}
          >
            mv-icons:icon-Arrow
          </FuseSvgIcon>
        </Button>
      </Paper>
    </>
  );
}
export default memo(WelcomeBlock);
