import AppBar from "@mui/material/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectFooterTheme } from "app/store/mv/settingsSlice";
import clsx from "clsx";
import PoweredByLinks from "../../shared-components/PoweredByLinks";
import DocumentationButton from "../../shared-components/DocumentationButton";
import PurchaseButton from "../../shared-components/PurchaseButton";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function FooterLayout1(props) {
  const footerTheme = useSelector(selectFooterTheme);
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className={clsx("relative z-20 shadow-md", props.className)}
        color="default"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? footerTheme.palette.background.paper
              : footerTheme.palette.background.default,
        }}
      >
        <Toolbar className="p-10 sm:px-40 sm:pt-20 sm:pb-[30px] flex items-center flex-wrap overflow-x-auto">
          <div className="flex grow shrink-0">
            <Typography variant="body2" color="text.grayV">{t("FOOTER_COPYRIGHT")}</Typography>
          </div>

          <div className="flex grow shrink-0 justify-end">
          <Typography variant="body2" color="text.grayV" className="font-bold uppercase">{t("FOOTER_SUPPORT")}</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout1);
