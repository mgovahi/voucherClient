import FuseScrollbars from "@fuse/core/FuseScrollbars";
import { styled, useTheme } from "@mui/material/styles";
import clsx from "clsx";
import { memo } from "react";
import Logo from "../../../../shared-components/Logo";
import NavbarToggleButton from "../../../../shared-components/NavbarToggleButton";
import UserNavbarHeader from "../../../../shared-components/UserNavbarHeader";
import Navigation from "../../../../shared-components/Navigation";
import { Button, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon/FuseSvgIcon";
import settingsConfig from "app/configs/settingsConfig";
import { NavLink, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  "& ::-webkit-scrollbar-thumb": {
    boxShadow: `inset 0 0 0 20px ${
      theme.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.24)"
        : "rgba(255, 255, 255, 0.24)"
    }`,
  },
  "& ::-webkit-scrollbar-thumb:active": {
    boxShadow: `inset 0 0 0 20px ${
      theme.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.37)"
        : "rgba(255, 255, 255, 0.37)"
    }`,
  },
}));

const StyledContent = styled(FuseScrollbars)(({ theme }) => ({
  overscrollBehavior: "contain",
  overflowX: "hidden",
  overflowY: "auto",
  WebkitOverflowScrolling: "touch",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 40px, 100% 10px",
  backgroundAttachment: "local, scroll",
}));

function NavbarStyle1Content(props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Root
      className={clsx(
        "flex flex-auto flex-col overflow-hidden h-full shadow",
        props.className
      )}
    >
      <div className="items-center h-48 relative mb-48 w-full p-10">
        {/* <div className="flex flex-1 mx-4">
          <Logo />
        </div> */}
        <Typography
          variant="body1"
          className="flex flex-col justify-center items-center gap-y-8"
          sx={{
            " img": {
              margin: "0 auto 12px 0",
              width: "190px",
            },
            // " b": {
            //   color: theme.palette.text.grayV,
            //   maxWidth: "70%",
            //   display: "inline-block",
            // },
          }}
        >
          <img src={`/assets/images/logo/logo.png`} />
          {/* <b className="text-lg">{t("ADMIN_PORTAL")}</b> */}
        </Typography>
        <NavbarToggleButton className="w-40 h-40 p-0 absolute left-4 top-0">
          <FuseSvgIcon fill="#99a8c1" className="stroke-transparent">
            mv-icons:icon-Menu
          </FuseSvgIcon>
        </NavbarToggleButton>
      </div>

      <StyledContent
        className="flex flex-1 flex-col min-h-0"
        option={{ suppressScrollX: true, wheelPropagation: false }}
      >
        {/* <UserNavbarHeader /> */}

        <Navigation layout="vertical" />
        <Box
            sx={{
              backgroundColor: theme.palette.custome.red,
              width: { xs: "200px", lg: "200px" },
              minHeight: "245px",
              borderRadius: "8px",
              position: "relative",
              margin: "5rem auto 0 auto"
            }}
          >
            <Box
              sx={{
                padding: "25px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Typography variant="body3" color="#fff" className="font-bold">
                {t("NEW_DEPOSIT")}
              </Typography>
              <Typography
                variant="small"
                color={theme.palette.custome.lightPurple}
                className="font-bold text-[12px]"
              >
                {t("DEPOSIT_SENTENCE")}
              </Typography>
              <Button
                sx={{
                  backgroundColor: theme.palette.custome.yellow,
                  width: "90px",
                  minHeight: "30px",
                  maxHeight: "30px",
                  fontSize: "12px",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "5px 10px",
                  zIndex: 2,
                }}
              >
                {t("ADD_DEPOSIT")}
              </Button>
            </Box>
            <img
              src="/assets/images/new-payment.svg"
              className="absolute -left-1 bottom-0 xs:w-[17rem] lg:w-160"
            />
          </Box>
        <div className="py-20 m-12 mt-32 border-t">
          <Button
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
              mt: 1,
              fontSize: "16px",
              display: "flex",
              justifyContent: "flex-start",
              gap: "16px",
              padding: "10px 16px",
              width: "100%",
              minHeight: "44px",
              "&.active": {
                color: "rgb(255, 255, 255)",
                backgroundColor: theme.palette.primary.main,
                // pointer-events: none;
                // transition: border-radius .15s cubic-bezier(0.4,0.0,0.2,1)
              },
            }}
            component={NavLink}
            to="/systemManagement"
          >
            <FuseSvgIcon>mv-icons-mc:icon-menu-configuration</FuseSvgIcon>
            {t("API_DOCUMENTS")}
          </Button>
        </div>
      </StyledContent>
    </Root>
  );
}

export default memo(NavbarStyle1Content);
