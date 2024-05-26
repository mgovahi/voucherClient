import { ThemeProvider, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Hidden from "@mui/material/Hidden";
import Toolbar from "@mui/material/Toolbar";
import { Badge, IconButton, Button, Typography } from "@mui/material";
import clsx from "clsx";
import { memo } from "react";
import { useSelector } from "react-redux";
import {
  selectFuseCurrentLayoutConfig,
  selectToolbarTheme,
} from "app/store/mv/settingsSlice";
import { selectFuseNavbar } from "app/store/mv/navbarSlice";
import AdjustFontSize from "../../shared-components/AdjustFontSize";
import FullScreenToggle from "../../shared-components/FullScreenToggle";
import LanguageSwitcher from "../../shared-components/LanguageSwitcher";
import NotificationPanelToggleButton from "../../shared-components/notificationPanel/NotificationPanelToggleButton";
import NavigationShortcuts from "../../shared-components/NavigationShortcuts";
import NavigationSearch from "../../shared-components/NavigationSearch";
import NavbarToggleButton from "../../shared-components/NavbarToggleButton";
import UserMenu from "../../shared-components/UserMenu";
import QuickPanelToggleButton from "../../shared-components/quickPanel/QuickPanelToggleButton";
import ChatPanelToggleButton from "../../shared-components/chatPanel/ChatPanelToggleButton";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useTranslation } from "react-i18next";
import moment from "jalali-moment";
import DollarLivePrice from "app/theme-layouts/shared-components/DollarLivePrice";
function ToolbarLayout1(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const navbar = useSelector(selectFuseNavbar);
  const toolbarTheme = useSelector(selectToolbarTheme);
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx("flex relative z-20   pr-0", props.className)}
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: "none",
        }}
        position="static"
      >
        <Toolbar
          className="p-0 min-h-48 md:min-h-64 shadow-md"
          sx={{
            backgroundColor: theme.palette.custome.blueDark,
          }}
        >
          <div className="flex flex-1 px-16">
            {config.navbar.display && config.navbar.position === "left" && (
              <>
                <Hidden lgDown>
                  {(config.navbar.style === "style-3" ||
                    config.navbar.style === "style-3-dense") && (
                    <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                  )}

                  {config.navbar.style === "style-1" && !navbar.open && (
                    <NavbarToggleButton className="w-40 h-40 p-0">
                      <FuseSvgIcon
                        fill="#f8f8f8"
                        className="stroke-transparent"
                      >
                        mv-icons:icon-Menu
                      </FuseSvgIcon>
                    </NavbarToggleButton>
                  )}
                </Hidden>
                <Hidden lgUp>
                  <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8 ">
                    <FuseSvgIcon fill="#f8f8f8" className="stroke-transparent">
                      mv-icons:icon-Menu
                    </FuseSvgIcon>
                  </NavbarToggleButton>
                </Hidden>
                <DollarLivePrice />
              </>
            )}

            {/* <Hidden lgDown>
              <NavigationShortcuts />
            </Hidden> */}
          </div>

          <div className="flex items-center px-8 h-full overflow-x-auto">
            {window.appSettings.allowLanguageSelection &&
              window.appSettings.languages.length > 1 && <LanguageSwitcher />}

            {/* <AdjustFontSize />

            <FullScreenToggle />

            <NavigationSearch />

            <Hidden lgUp>
              <ChatPanelToggleButton />
            </Hidden>

            <QuickPanelToggleButton />

            <NotificationPanelToggleButton /> */}
            <Hidden smDown>
              <UserMenu />
            </Hidden>
          </div>

          {config.navbar.display && config.navbar.position === "right" && (
            <>
              <Hidden lgDown>
                {!navbar.open && (
                  <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                )}
              </Hidden>

              <Hidden lgUp>
                <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
              </Hidden>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarLayout1);
