import React from "react";
import { Paper, useTheme, Box, Typography, Grid, Button } from "@mui/material";
import { useMemo } from "react";
import moment from "jalali-moment";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Row } from "redoc";


const UserInfo = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const Person = {
    name: "  رادوین بزرگی  ",
    position: "راهبر",
    email: "radwin@bozorgi.com",
    mobile: "۰۹۱۲۳۵۰۴۱۷۹",
  };

  return (
    <Paper
      className="shadow gap-4 grid "
      sx={{
        display: "flex",
        marginY: "20px"
      }
      }
    >
      <Box
        className="flex p-[30px] gap-x-[40px] flex-row"
        width={"100%"}
        height={'220px'}

      >
        <Box
          className=" flex justify-center items-center"
          sx={{
            borderRadius: "20px",
            width: "160px",
            height: "160px",
            backgroundColor: "#f3f8ff",
          }}
        >
          <img src="assets/images/user.png" className="rounded-[12px]" />
          {/* <FuseSvgIcon size={100} sx={{ color: "#fff" }}>
            mv-icons:icon-User-_-Light-_-Duotone
          </FuseSvgIcon> */}
        </Box>

        <Box className="flex-1 flex flex-col justify-between">
          <Box className="relative">
            <Typography
              variant="body1"
              color={"black"}
              className="font-bold text-[18px] "
              sx={{ paddingTop: "4px" }}
            >
              {Person.name}
            </Typography>
            <Box
              sx={{
                paddingTop: "5px",
                display: "flex",
                flexDirection: "row",
                gap: "40px",

                " svg": {
                  minWidth: "14px",
                  minHeight: "14px",
                  height: "14px",
                  width: "14px",

                }
              }}
            >
              <span className=" flex justify-center items-center rounded-full "
              >
                <FuseSvgIcon
                  className="ml-7"

                >
                  mv-icons-mc:icon-User-_-Light-_-Duotone
                </FuseSvgIcon>
                <Typography
                  variant="body2"
                  color={[theme.palette.text.grayDay]}
                  className="font-bold text-[14px]"
                >
                  {Person.position}
                </Typography>
              </span>
              <span className=" flex justify-center items-center rounded-full "
              >
                <FuseSvgIcon
                  className="ml-7"
                >
                  mv-icons-mc:icon-profile-mobile
                </FuseSvgIcon>
                <Typography
                  variant="body2"
                  color={[theme.palette.text.grayDay]}
                  className="font-bold text-[14px] "
                >
                  {Person.mobile}
                </Typography>
              </span>

              <span className=" flex justify-center items-center rounded-full "
              >
                <FuseSvgIcon
                  className="ml-7"

                >
                  mv-icons-mc:icon-At-_-Light-_-Duotone
                </FuseSvgIcon>
                <Typography
                  variant="body2"
                  color={[theme.palette.text.grayDay]}
                  className="font-bold text-[14px] "
                >
                  {Person.email}
                </Typography>
              </span>
            </Box>

            <Box
              className="flex  "
              sx={{
                position: "absolute",
                top: { xs: "98px", lg: '9px' },

                right: { xs: "5px", lg: '0' },
                maxWidth: "initial",
                fontSize: "1.1rem",
                fontWeight: "normal",

              }} >
              <Button
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.custome.info2
                  },
                  width: { xs: "150px", lg: '217px' },
                  height: "42px",

                  fontSize: { xs: "10px", lg: '14px' },
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {t("UPDATE_PROFILE_PICTURE")}
                <span className=" flex justify-center items-center rounded-full "
                >
                  <FuseSvgIcon
                    className="mr-4"
                    sx={{
                      fill: `${theme.palette.divider}!important`,
                      stroke: `${theme.palette.divider}!important`,
                    }}
                  >
                    mv-icons:icon-CloudUpload
                  </FuseSvgIcon>
                </span>
              </Button>
            </Box>

          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserInfo;
