import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { Typography, Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { blueGrey } from "@mui/material/colors";
import AmountChart from "./AmountChart";
function VoucherAmounts() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Card
            className="shadow overflow-hidden justify-center items-center "
            sx={{
              // minHeight: "345.4px",
              width: "100%",
            }}
          >
            <CardHeader
              className=" flex justify-center items-center  p-20"
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: "104px",
              }}
              avatar={
                <i
                  className="w-[64px] h-[64px] flex justify-center items-center rounded-full "
                  style={{
                    border: `1px dashed ${theme.palette.primary.secondary}`,
                  }}
                >
                  <FuseSvgIcon
                    sx={{
                      fill: `${theme.palette.primary.secondary}!important`,
                      stroke: `${theme.palette.primary.light}!important`,
                    }}
                  >
                    mv-icons-mc:icon-Voucher-Generated
                  </FuseSvgIcon>
                </i>
              }
            />

            <CardContent
              className=" flex flex-col justify-end items-start gap-4 p-20 "
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: "200px",
              }}
            >
              <Typography
                className="font-bold"
                sx={{
                  color: theme.palette.text.alpha68,
                  fontSize: "1.2rem !important",
                }}
                textAlign="center"
              >
                {t("TOTAL_VOUCHER_ISSUED")} ({t("TOMAN")})
              </Typography>
              <Typography variant="h5" className="font-bold" color="white">
                <span>۲۶,۹۷۵,۶۰۹,۴۹۴</span>
              </Typography>
            </CardContent>

            <CardContent
              className=" flex flex-col items-start  gap-4  p-20"
              sx={{
                backgroundColor: theme.palette.primary.dark,
                height: "83px",
              }}
            >
              <Typography
                className="font-bold"
                sx={{
                  color: theme.palette.text.alpha68,
                  fontSize: "1.2rem !important",
                }}
                textAlign="center"
              >
                {t("TOTAL_NUMBER_VOTCHER")}
              </Typography>
              <Typography
                className="font-bold"
                color="white"
                sx={{ fontSize: "18px !important" }}
              >
                <span>۱,۹۲۰,۸۹۲</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card
            className="shadow overflow-hidden justify-center items-center "
            sx={{
              // minHeight: "345.4px",
              width: "100%",
            }}
          >
            <CardHeader
              className=" flex justify-center items-center  p-20"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                height: "104px",
              }}
              avatar={
                <i
                  className="w-[64px] h-[64px] flex justify-center items-center rounded-full "
                  style={{
                    border: `1px dashed ${theme.palette.accent.secondary}`,
                  }}
                >
                  <FuseSvgIcon
                    sx={{
                      fill: `${theme.palette.accent.secondary}!important`,
                      stroke: `${theme.palette.accent.light}!important`,
                    }}
                  >
                    mv-icons-mc:icon-Voucher-Generated-2
                  </FuseSvgIcon>
                </i>
              }
            />

            <CardContent
              className=" flex flex-col justify-end items-start gap-4 p-20 "
              sx={{
                backgroundColor: theme.palette.secondary.main,
                height: "200px",
              }}
            >
              <Typography
                className="font-bold"
                sx={{
                  color: theme.palette.text.alpha68,
                  fontSize: "1.2rem !important",
                }}
                textAlign="center"
              >
                {t("TOTAL_VOUCHER_CONSUMED")} ({t("TOMAN")})
              </Typography>
              <Typography variant="h5" className="font-bold" color="white">
                <span>۱۷,۵۹۰,۴۷۷,۵۰۰</span>
              </Typography>
            </CardContent>

            <CardContent
              className=" flex flex-col items-start  gap-4  p-20"
              sx={{
                backgroundColor: theme.palette.secondary.dark,
                height: "83px",
              }}
            >
              <Typography
                className="font-bold"
                sx={{
                  color: theme.palette.text.alpha68,
                  fontSize: "1.2rem !important",
                }}
                textAlign="center"
              >
                {t("TOTAL_NUMBER_VOTCHER")}
              </Typography>
              <Typography
                className="font-bold"
                color="white"
                sx={{ fontSize: "18px !important" }}
              >
                <span>۱,۴۳۲,۹۰۹ </span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <AmountChart />
        </Grid>
      </Grid>
    </>
  );
}

export default VoucherAmounts;
