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
        "flex flex-auto flex-col overflow-hidden h-full shadow gap-y-28 p-20",
        props.className
      )}
    >
      <div className="min-h-48 flex justify-between items-center w-full">
        {/* <div className="flex flex-1 mx-4">
          <Logo />
        </div> */}
        <Typography
          variant="body1"
          className="flex flex-col justify-center items-center gap-y-8"
          sx={{
            " img": {
              margin: "0",
              width: "190px",
            },
            // " b": {
            //   color: theme.palette.text.grayV,
            //   maxWidth: "70%",
            //   display: "inline-block",
            // },
          }}
        >
          <img src={`/assets/images/logo/logo.svg`} />
          {/* <b className="text-lg">{t("ADMIN_PORTAL")}</b> */}
        </Typography>
        <NavbarToggleButton className="w-40 h-40 p-0">
          <FuseSvgIcon
            color={theme.palette.text.grayV}
            className="stroke-transparent ltr:rotate-180"
          >
            mv-icons:icon-Menu
          </FuseSvgIcon>
        </NavbarToggleButton>
      </div>

      <StyledContent
        className="flex flex-1 flex-col justify-evenly gap-20 min-h-0"
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
            margin: "0 auto",
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
              {t("VOUCHER_GENERATE")}
            </Typography>
            <Typography
              variant="small"
              color={theme.palette.custome.lightPurple}
              className="text-[12px]"
            >
              {t("VOUCHER_GENERATE_SENTENCE")}
            </Typography>
            <Button
              sx={{
                backgroundColor: theme.palette.custome.yellow,
                width: "100px",
                minHeight: "30px",
                maxHeight: "30px",
                fontSize: "12px",
                color: "#fff",
                fontWeight: "bold",
                padding: "5px 10px",
                zIndex: 2,
              }}
              className="ltr:ml-auto"
              onClick={() => {
                navigate("/voucherGenerate");
              }}
            >
              {t("NEW_VOUCHER")}
            </Button>
          </Box>
          <img
            src="/assets/images/Voucher-SittingMan.svg"
            className="absolute -left-1 -bottom-1 w-[17rem]"
          />
        </Box>
        <div className="py-20 border-t hidden">
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
                svg: {
                  color: theme.palette.warning.main,
                },
              },
            }}
            component={NavLink}
            to="/systemManagement"
          >
            <FuseSvgIcon>mv-icons:icon-icon-menu-documents</FuseSvgIcon>
            {t("API_DOCUMENTS")}
          </Button>
        </div>
      </StyledContent>
    </Root>
  );
}

export default memo(NavbarStyle1Content);
