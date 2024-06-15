import clsx from "clsx";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "../FuseSvgIcon";

const Root = styled("div")(({ theme, ...props }) => ({
  "&.inner": {
    h6: {
      fontSize: "16px",
    },
  },
  " h6": {
    margin: "0",
    fontSize: "18px",
    color: theme.palette.text.primary,
    fontWeight: "bold",
  },
}));
function FusePageSimpleHeader({ className, header, headerActions, inner }) {
  const { t } = useTranslation();
  return (
    <Root
      className={clsx(
        "FusePageSimple-header flex justify-between items-center",
        inner ? " inner" : "",
        className
      )}
    >
      <h6>{header && header}</h6>
      {headerActions && headerActions}
    </Root>
  );
}

export default FusePageSimpleHeader;
