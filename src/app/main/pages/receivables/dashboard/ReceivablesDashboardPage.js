import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import SimpleStatBox from "app/shared-components/SimpleStatBox";
import { useState } from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import ReceivableState from "./components/ReceivableState";
import LatestReceivables from "./components/LatestReceivables";

function ReceivablesDashboardPage(props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [dashStats, setDashStats] = useState([
    {
      icon: "mv-icons-mc:icon-incomeInfo",
      value: "۶,۰۹۰,۵۶۷,۸۱۰ تومان ",
      title: "واریزی های امروز",
      color: theme.palette.info,
    },
    {
      icon: "mv-icons-mc:icon-incomeGreen",
      value: "۵,۱۷۷,۴۴۵,۱۴۶ تومان ",
      title: "واریزی های تایید شده امروز",
      color: theme.palette.green,
    },
    {
      icon: "mv-icons-mc:icon-incomeYellow",
      value: "۹۱۳,۱۲۲,۶۶۳ تومان ",
      title: "واریزی های در انتظار تایید امروز",
      color: theme.palette.yellow,
    },
  ]);

  const Root = styled(FusePageSimple)(({ theme }) => {});
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Root
        header={t("RECEIVABLES_DASHBOARD")}
        headerActions={
          <>
            <Button variant="outlined" color="default" aria-label="refresh">
              <FuseSvgIcon>mv-icons:icon-Masked-Icon</FuseSvgIcon>
            </Button>
          </>
        }
        sx={{
          " .FusePageSimple-contentWrapper >  .FusePageSimple-header": {
            " h6": {
              color: theme.palette.text.grayV,
            },
          },
        }}
        content={
          <div className="w-full">
            <motion.div
              className="grid grid-cols-1 gap-24 w-full min-w-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="col-span-1 ">
                <Box>
                  <ReceivableState />
                </Box>
                <Box
                  className="flex gap-[24px] my-[24px]"
                  sx={{
                    " > div": {
                      flex: 1,
                    },
                  }}
                >
                  {dashStats.map((stat) => {
                    return (
                      <SimpleStatBox
                        icon={stat.icon}
                        color={stat.color}
                        statValue={stat.value}
                        statTitle={stat.title}
                      ></SimpleStatBox>
                    );
                  })}
                </Box>
                <LatestReceivables />
              </motion.div>
            </motion.div>
          </div>
        }
        variant="none"
      />
    </>
  );
}

export default ReceivablesDashboardPage;
