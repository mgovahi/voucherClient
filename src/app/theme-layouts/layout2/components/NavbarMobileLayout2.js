import FuseScrollbars from "@fuse/core/FuseScrollbars";
import { styled, useTheme } from "@mui/material/styles";
import clsx from "clsx";
import { memo } from "react";
import UserNavbarHeader from "../../shared-components/UserNavbarHeader";
import NavbarToggleButton from "../../shared-components/NavbarToggleButton";
import Logo from "../../shared-components/Logo";
import Navigation from "../../shared-components/Navigation";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

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

function NavbarMobileLayout2(props) {
  const theme = useTheme();
  return (
    <Root
      className={clsx("flex flex-col h-full overflow-hidden", props.className)}
    >
      <div className="flex flex-row items-center shrink-0 h-48 md:h-72 px-20">
        <div className="w-fit m-auto">
          <Logo />
        </div>

        <NavbarToggleButton className="w-40 h-40 p-0 absolute left-3">
          <FuseSvgIcon sx={{ color: theme.palette.text.secondary }}>
            heroicons-outline:arrow-sm-right
          </FuseSvgIcon>
        </NavbarToggleButton>
      </div>

      <StyledContent
        className="flex flex-1 flex-col min-h-0"
        option={{ suppressScrollX: true, wheelPropagation: false }}
        sx={{
          " .report": {
            fill: "#383a3c",
            stroke: "transparent",
          },
        }}
      >
        <UserNavbarHeader />

        <Navigation layout="vertical" />

        <div className="flex flex-0 items-center justify-center py-48 opacity-10">
          <img
            className="w-full max-w-64"
            src="assets/images/logo/logo.svg"
            alt="footer logo"
          />
        </div>
      </StyledContent>
    </Root>
  );
}

export default memo(NavbarMobileLayout2);
