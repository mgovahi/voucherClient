import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Paper, TextField, Button } from "@mui/material";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useAuth } from "react-oidc-context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormAdmin from "./components/SearchFormAdmin";
import AdminsList from "./components/AdminsList";

function AdminManagementPage(props) {
  const { t } = useTranslation();
  const naviage = useNavigate();
  const theme = useTheme();
  const [Admins, setAdmins] = useState({
    list: sampleData,
    totalInfo: { PageSize: 10, TotalRecords: 50, PageNumber: 1 },
  });
  const Root = styled(FusePageSimple)(({ theme }) => ({}));
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
  const onPageSizeChange = (pageSize) => {
    //setReportData({ ...reportData, pageSize: pageSize });
  };

  return (
    <>
      <Root
        header={t("ADMINS_MANAGEMENT")}
        headerActions={
          <>
            <Button
              className="py-10 px-20 min-h-full h-[38px] w-[142px] rounded-[5px] flex "
              variant="contained"
              color="primary"
              onClick={() => {
                naviage("/addAdmin");
              }}
              endIcon={
                <FuseSvgIcon className="rotate-180">
                  mv-icons:icon-Add
                </FuseSvgIcon>
              }
            >
              {t("NEW_ADMIN")}
            </Button>
          </>
        }
        content={
          <div className="w-full p-16 ">
            <motion.div
              className="grid grid-cols-1  gap-24 w-full min-w-0"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="col-span-1">
                <Box>
                  <SearchFormAdmin />
                </Box>
                <Box>
                  <AdminsList
                    data={Admins.list}
                    total={Admins.totalInfo}
                    onPageSizeChange={onPageSizeChange}
                  />
                </Box>
              </motion.div>
            </motion.div>
          </div>
        }
      />
    </>
  );
}

const sampleData = [
  {
    id: 1,
    clientId: 2001234,
    firstName: "سیاوش",
    lastName: "توکلی",
    mobile: "09128591586",
    email: "siavash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    id: 2,
    clientId: 2001230,
    firstName: "نوید",
    lastName: "خیراللهی",
    mobile: "09128891588",
    email: "arash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "ACTIVE",
  },

  {
    id: 3,
    clientId: 2001231,
    firstName: "محسن",
    lastName: "تقی زاده",
    mobile: "09128891588",
    email: "arash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    id: 4,
    clientId: 2001232,
    firstName: "سیاوش",
    lastName: "توکلی",
    mobile: "09128891588",
    email: "arash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "INACTIVE",
  },
  {
    id: 5,
    clientId: 2001233,
    firstName: "نوید",
    lastName: "خیراللهی",
    mobile: "09128891588",
    email: "arash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    id: 6,
    clientId: 2001234,
    firstName: "محسن",
    lastName: "تقی زاده",
    mobile: "09128891588",
    email: "arash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    id: 7,
    clientId: 2001235,
    firstName: "لیلا",
    lastName: "کفایتی",
    mobile: "09128891588",
    email: "arash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "INACTIVE",
  },
  {
    id: 8,
    clientId: 2001236,
    firstName: "مونا",
    lastName: "نظری",
    mobile: "09128891588",
    email: "arash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    id: 9,
    clientId: 2001237,
    firstName: "محسن",
    lastName: "تقی زاده",
    mobile: "09128891588",
    email: "arash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "ACTIVE",
  },
  {
    id: 10,
    clientId: 2001238,
    firstName: "سیاوش",
    lastName: "توکلی",
    mobile: "09128891588",
    email: "arash@gmail.com",
    balance: "5486440000",
    lastLogin: new Date().getTime(),
    status: "INACTIVE",
  },
];
export default AdminManagementPage;
