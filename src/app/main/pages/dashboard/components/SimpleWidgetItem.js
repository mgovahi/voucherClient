import { memo } from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

function SimpleWidgetItems({ description, amount, svgIcon, color }) {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        lg={3}
        className="rounded-lg"
        justifyContent={"center"}
      >
        <Paper
          className="flex flex-col items-center gap-4 p-20"
          sx={{ minHeight: "140px", width: "100%" }}
        >
          <i
            className="w-[50px] h-[50px] mb-16 flex justify-center items-center rounded-full "
            style={{ backgroundColor: color.light }}
          >
            <FuseSvgIcon
            >
              {svgIcon}
            </FuseSvgIcon>
          </i>
          <Typography variant="h6" className="font-bold">
            {amount.toAmount()}
          </Typography>
          <Typography
            variant="body2"
            color="text.grayDay"
            textAlign="center"
          >
            {t(description)}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
export default memo(SimpleWidgetItems);
