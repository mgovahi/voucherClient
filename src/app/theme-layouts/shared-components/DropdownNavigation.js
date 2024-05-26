import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Box } from "@mui/material";
function DropdownNavigation({ navigation }) {
  const navigae = useNavigate();
  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  return (
    <>
      <Box
        className="focus:shadow-3 m-1  rounded-full p-8 "
        onClick={userMenuClick}
        variant="contained"
        sx={{
          minWidth: "40px !important",
          minHeight: "40px !important",
          // margin: "8px 0 8px 32px;"
          backgroundColor: "rgba(171, 199, 255, 0.3) !important",
          cursor: "pointer"
        }}
      >
        <Box>
          <img className="w-32" src="/assets/images/general/MenuOpen@2x.png" />
        </Box>
      </Box>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{
          paper: "py-8",
        }}
        sx={{
          "li svg": {
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
        {navigation.map((navItem) => (
          <MenuItem
            key={navItem.id}
            onClick={() => {
              userMenuClose();
              navigae(navItem.url);
            }}
          >
            {navItem.icon && (
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon
                  className={clsx(
                    "fuse-list-item-icon shrink-0",
                    navItem.iconClass
                  )}
                  color="action"
                >
                  {navItem.icon}
                </FuseSvgIcon>
              </ListItemIcon>
            )}
            <ListItemText primary={navItem.title} />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}

export default DropdownNavigation;
