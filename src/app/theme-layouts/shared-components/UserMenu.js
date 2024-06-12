import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Box } from "@mui/material";

import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { selectUser } from "app/store/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth, hasAuthParams } from "react-oidc-context";
import authConfig from "app/configs/oidc";
function UserMenu(props) {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  //const auth = useAuth();
  //const profile = auth.user.profile;
  useEffect(() => {
    // (async () => {
    //     const response = await axios.get(`/api/v1/account`);
    //     const data = await response.data;
    //     setUser(data.result);
    // })();
  }, []);

  const [userMenu, setUserMenu] = useState(null);
  const theme = useTheme();
  const { t } = useTranslation();

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  const renderAvatar = () => {
    if (!user) return <Avatar className="md:mx-4" />;
    return (
      <Avatar className="md:mx-4">
        {user?.displayName[0] + user?.displayName[1]}
      </Avatar>
    );
  };

  const Person = {
    name: "  رادوین بزرگی  ",
    position: "راهبر",
    email: "radwin@bozorgi.com",
    mobile: "۰۹۱۲۳۵۰۴۱۷۹",
  };

  return (
    <>
      <Button
        className="flex justify-between px-1 ml-40 rounded-none pr-16 mr-16"
        onClick={userMenuClick}
        variant="text"
        color="primary"
        startIcon={<FuseSvgIcon size={14}>mv-icons-mc:icon-Arrow</FuseSvgIcon>}
        sx={{
          minWidth: "181px",
          minHeight: "40px",
          borderLeft: `1px solid ${theme.palette.custome.grayProfile}`,
          padding: "0",
          " img": {
            width: "100%",
            height: "100%",
          },
          " .MuiButton-startIcon": {
            marginLeft: 0,
            marginRight: 0,
          },
        }}
      >
        <Typography
          variant="caption"
          className="whitespace-nowrap ml-10"
          sx={{ color: "white", fontSize: "14px" }}
        >
          {Person.name}
        </Typography>
        {/* <Typography
          variant="caption"
          className="flex justify-center items-center"
          sx={{
            background: "#7239ea",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            " svg": {
              color: "#fff",
            },
          }}
        >
          <FuseSvgIcon size={18}>
            mv-icons:icon-User-_-Light-_-Duotone
          </FuseSvgIcon>
        </Typography> */}
        <Box
          className=" flex justify-center items-center"
          sx={{
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            backgroundColor: "#f3f8ff",
          }}
        >
          <img src="assets/images/user.png" className="rounded-full" />
        </Box>
      </Button>
      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        // transformOrigin={{
        //   vertical: "top",
        //   horizontal: "center",
        // }}

        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          ".MuiMenuItem-root": {
            margin: "10px",
            height: "36px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "rgba(239, 243, 249, 0.6);",
              ".MuiButton-caption": {
                color: theme.palette.info.main
              }
            },
            ".MuiTypography-root": {
              fontSize: "14px",
            },
          }
        }}
      >
        <MenuItem
          onClick={() => {
            userMenuClose();
            navigate("/changeInfo");
          }}
          sx={{
            borderBottom: `1px solid  ${theme.palette.divider}`,
            width: 230,
            height: "68px !important",
            "&:hover": {
              backgroundColor: "transparent !important"
            }
          }}
        >
          <Box
            className=" flex justify-center items-center"
            sx={{
              borderRadius: "20px",
              width: "48px",
              height: "48px",
            }}
          >
            <img src="assets/images/user.png" className="rounded-[12px]" />
          </Box>
          <ListItemText className="p-10">
            <Box sx={{ fontWeight: "bold" }}> {`${Person.name}`} </Box>
            <Box sx={{ color: theme.palette.primary.main }}>
              {`${Person.email}`}
            </Box>
          </ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            userMenuClose();
            navigate("/changeInfo");
          }}
        >
          {/* <ListItemIcon className=" p-10">
            <FuseSvgIcon
              size="20px"
              sx={{
                // fill: `${theme.palette.accent.secondary}!important`,
                // stroke: `${theme.palette.accent.light}!important`,
              }}
            >

              mv-icons:icon-Icon-2</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText sx={{fontWeight:"bold"}} primary="پروفایل کاربری" /> */}

          <Button
            variant="caption"
            sx={{
              color: theme.palette.text.primary,
              padding: "0 5px!important",
              fontSize: "14px",
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
              width: "200px",

              "&:hover": {
                backgroundColor: "transparent !important",
              },
              "&.active": {
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.background.infoLight,
              },
            }}
            // onClick={() => navigate("/systemManagement")}
            component={NavLink}
            to="/profile"
          >
            <FuseSvgIcon size="20px">mv-icons:icon-Icon-2</FuseSvgIcon>
            <ListItemText sx={{ fontWeight: "bold" }} primary={t("PROFILE")} />
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            userMenuClose();
            navigate("/changePass");
          }}
        >
          <ListItemIcon className=" ">
            <Button
              variant="caption"
              sx={{
                padding: "0 5px!important",
                color: theme.palette.text.primary,
                fontSize: "14px",
                display: "flex",
                gap: "10px",
                width: "200px",
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
                "&.active": {
                  color: theme.palette.secondary.main,
                  backgroundColor: theme.palette.background.infoLight,
                },
              }}
              // onClick={() => navigate("/systemManagement")}
              component={NavLink}
              to="/add"
            >
              <FuseSvgIcon size="20px">mv-icons:icon-Icon</FuseSvgIcon>
              <ListItemText primary={t("CHANGE_PASSWORD")} />
            </Button>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon className=" p-10">
            <FuseSvgIcon
              size="20px"
              sx={{
                fill: `${theme.palette.error.main}!important`,
                stroke: `${theme.palette.accent.light}!important`,
              }}
            >
              mv-icons:icon-Icon-3
            </FuseSvgIcon>
          </ListItemIcon>
          <ListItemText
            sx={{ color: theme.palette.error.main }}
            primary={t("Exit")}
          />
        </MenuItem>
      </Popover>
    </>
  );
}

export default UserMenu;
