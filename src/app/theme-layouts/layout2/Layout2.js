import FuseDialog from "@fuse/core/FuseDialog";
import { styled } from "@mui/material/styles";
import FuseMessage from "@fuse/core/FuseMessage";
import FuseSuspense from "@fuse/core/FuseSuspense";
import AppContext from "app/AppContext";
import clsx from "clsx";
import { memo, useContext } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { selectFuseCurrentLayoutConfig } from "app/store/mv/settingsSlice";
import FooterLayout2 from "./components/FooterLayout2";
import LeftSideLayout2 from "./components/LeftSideLayout2";
import NavbarWrapperLayout2 from "./components/NavbarWrapperLayout2";
import RightSideLayout2 from "./components/RightSideLayout2";
import ToolbarLayout2 from "./components/ToolbarLayout2";
import SettingsPanel from "../shared-components/SettingsPanel";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { faIR } from "@mui/x-date-pickers/locales";
import { t } from "i18next";
const Root = styled("div")(({ theme, config }) => ({
  ...(config.mode === "boxed" && {
    clipPath: "inset(0)",
    maxWidth: `${config.containerWidth}px`,
    margin: "0 auto",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  }),
  ...(config.mode === "container" && {
    "& .container": {
      maxWidth: `${config.containerWidth}px`,
      width: "100%",
      margin: "0 auto",
    },
  }),
}));

function Layout2(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const appContext = useContext(AppContext);
  const { routes } = appContext;

  return (
    <Root id="fuse-layout" className="w-full flex" config={config}>
      <LocalizationProvider
        dateAdapter={AdapterDateFnsJalali}
        localeText={{
          ...faIR.components.MuiLocalizationProvider.defaultProps.localeText,
          okButtonLabel: t("OK"),
          clearButtonLabel: t("CLEAR"),
        }}
      >
        <div className="flex flex-col flex-auto min-w-0">
          <main
            id="fuse-main"
            className="flex flex-col flex-auto min-h-full min-w-0 relative"
          >
            {config.navbar.display && (
              <NavbarWrapperLayout2
                className={clsx(
                  config.navbar.style === "fixed" && "sticky top-0 z-50"
                )}
              />
            )}

            <div className="flex flex-col flex-auto min-h-0 relative z-10">
              <FuseDialog />

              <FuseSuspense>{useRoutes(routes)}</FuseSuspense>

              {props.children}
            </div>

            {config.footer.display && <FooterLayout2 />}
          </main>
        </div>

        <FuseMessage />
      </LocalizationProvider>
    </Root>
  );
}

export default memo(Layout2);
