import AppBar from "@mui/material/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import clsx from "clsx";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectFooterTheme } from "app/store/mv/settingsSlice";
import PurchaseButton from "../../shared-components/PurchaseButton";
import PoweredByLinks from "../../shared-components/PoweredByLinks";
import DocumentationButton from "../../shared-components/DocumentationButton";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
function FooterLayout2(props) {
  const footerTheme = useSelector(selectFooterTheme);
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className={clsx("relative z-20 shadow-md", props.className)}
        color="default"
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar className="min-h-48 md:min-h-64 px-8 sm:px-12 py-0 flex items-center overflow-x-auto ">
          <div className="flex flex-col grow shrink-0 px-12 justify-center ">
            <Divider
              className="mb-10 mt-40"
              sx={{
                " span": {
                  color: "#b4b2b7",
                  fontSize: "12px",
                },
              }}
            >
              {t("POWERED_BY")}
            </Divider>
            <PoweredByLinks />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout2);
