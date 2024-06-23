import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import clsx from "clsx";
import PropTypes from "prop-types";
import { memo, useMemo } from "react";
import withRouter from "@fuse/core/withRouter";
import FuseNavBadge from "../../FuseNavBadge";
import FuseSvgIcon from "../../../FuseSvgIcon";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none!important",
  minHeight: "64px !important",
  marginLeft: "36px",
  "&.active": {
    backgroundColor: `${theme.palette.secondary.main}!important`,

    color: `${theme.palette.secondary.contrastText}!important`,
    pointerEvents: "none",
    "& .fuse-list-item-text-primary": {
      color: "inherit",
      fontWeight: "bold",
    },
    "& .fuse-list-item-icon": {
      color: "inherit",
    },
  },
  "&.fuse-list-item": {
    padding: "8px 20px !important",
    margin: "8px 12px 8px 12px",
    minHeight: "auto !important",
    height: "auto",
    borderRadius: "20px",
    [theme.breakpoints.down('lg')]: {
      margin: "0",
    },
    // [theme.breakpoints.between("md", "lg")]: {
    //   margin: 0
    // }
  },
  "& .fuse-list-item-icon": {},
  "& .fuse-list-item-text": {
    padding: "0 0 0 16px",
  },
}));

function FuseNavHorizontalItem(props) {
  const { item } = props;

  return useMemo(
    () => (
      <StyledListItem
        button
        component={NavLinkAdapter}
        to={item.url || ""}
        activeClassName={item.url ? "active" : ""}
        className={clsx("fuse-list-item", item.active && item.active)}
        end={item.end}
        role="button"
        sx={item.sx}
        disabled={item.disabled}
      >
        {item.icon && (
          <FuseSvgIcon
            className={clsx("fuse-list-item-icon shrink-0", item.iconClass)}
            color="action"
          >
            {item.icon}
          </FuseSvgIcon>
        )}

        <ListItemText
          className="fuse-list-item-text"
          primary={item.title}
          classes={{ primary: "text-13 fuse-list-item-text-primary truncate" }}
        />

        {item.badge && (
          <FuseNavBadge className="ltr:ml-8 rtl:mr-8" badge={item.badge} />
        )}
      </StyledListItem>
    ),
    [item.badge, item.exact, item.icon, item.iconClass, item.title, item.url]
  );
}

FuseNavHorizontalItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
  }),
};

FuseNavHorizontalItem.defaultProps = {};

const NavHorizontalItem = withRouter(memo(FuseNavHorizontalItem));

export default NavHorizontalItem;
