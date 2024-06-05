import FuseScrollbars from "@fuse/core/FuseScrollbars";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import { memo } from "react";
import Logo from "../../shared-components/Logo";
import Navigation from "../../shared-components/Navigation";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import UserMenu from "../../shared-components/UserMenu";
import Hidden from "@mui/material/Hidden";
import NavbarToggleButton from "app/theme-layouts/shared-components/NavbarToggleButton";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

function NavbarLayout2(props) {
  const { t } = useTranslation();
  return (
    <Paper
      className="flex flex-col rounded-[10px] overflow-hidden m-16 mb-10 p-12 h-[100px] max-h-[100px]"
      sx={{
        "ul svg": {
          stroke: "#383a3c",
          fill: "transparent",
          color: "#383a3c",
        },
        " .invert": {
          fill: "#383a3c",
          stroke: "transparent",
        },
      }}
    >
      <div className="flex justify-between items-center w-full h-full p-0 z-20">
        <div className="flex shrink-0 items-center px-0 xs:px-8 w-full md:w-auto justify-center xs:justify-between md:justify-start">
          <NavbarToggleButton className="w-40 h-40 p-0 md:hidden">
            <FuseSvgIcon
              color={theme.palette.text.grayV}
              className="stroke-transparent ltr:rotate-180"
            >
              mv-icons:icon-Menu
            </FuseSvgIcon>
          </NavbarToggleButton>
          <div className="flex items-center gap-5 xs:gap-10 md:gap-20">
            <Logo />
            <Typography
              variant="caption"
              className="md:text-md lg:text-lg inline-block font-bold"
              color="primary"
            >
              {t("APP_NAME")}
            </Typography>
          </div>
        </div>
        <Hidden mdDown>
          <FuseScrollbars className="flex h-full items-center">
            <Navigation className="w-full" layout="horizontal" />
          </FuseScrollbars>
        </Hidden>
        <div className="shrink-0 items-center px-8 hidden md:inline-block">
          <UserMenu />
        </div>
      </div>
    </Paper>
  );
}

export default memo(NavbarLayout2);
