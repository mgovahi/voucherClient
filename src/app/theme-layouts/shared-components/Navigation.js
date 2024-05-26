import FuseNavigation from "@fuse/core/FuseNavigation";
import clsx from "clsx";
import { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNavigation } from "app/store/mv/navigationSlice";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import { navbarCloseMobile } from "app/store/mv/navbarSlice";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import DropdownNavigation from "./DropdownNavigation"
function Navigation(props) {
  var navigation = useSelector(selectNavigation);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("md"));
  const isWidthMdToLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isWidthLgToXl = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  return useMemo(() => {
    function handleItemClick(item) {
      if (isMobile) {
        dispatch(navbarCloseMobile());
      }
    }
    let navItems = [...navigation];
    let dropdownNavigation = [];

    switch (true) {
      case isWidthMdToLg:
        navItems = navigation.slice(0, 2);
        dropdownNavigation = navigation.slice(2);
        break;

      case isWidthLgToXl:
        navItems = navigation.slice(0, 3);
        dropdownNavigation = navigation.slice(3);
        break;

      case isMobile && props.layout === "vertical":
        navItems.push({
          id: "logout",
          title: t("LOGOUT"),
          type: "item",
          icon: "ob_icons:icon-signout",
          url: "/#",
        });
        break;

      default:
        break;
    }
    return (
      <>
        <FuseNavigation
          className={clsx("navigation", props.className)}
          navigation={navItems}
          layout={props.layout}
          dense={props.dense}
          active={props.active}
          onItemClick={handleItemClick}
        />
        {isWidthMdToLg || isWidthLgToXl ? (
          <DropdownNavigation navigation={dropdownNavigation} />
        ) : null}
      </>
    );
  }, [
    dispatch,
    isMobile,
    navigation,
    props.active,
    props.className,
    props.dense,
    props.layout,
    isWidthMdToLg,
    isWidthLgToXl,
  ]);
}

Navigation.defaultProps = {
  layout: "vertical",
};

export default memo(Navigation);
