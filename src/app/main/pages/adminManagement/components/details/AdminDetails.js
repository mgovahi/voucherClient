import { useState } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, width } from "@mui/system";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
  Tabs,
  Tab,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import SecSettings from "./securitySettings/SecSettings";
import Permissions from "./permissions/Permissions";
import clsx from "clsx";
import AdminInfo from "./AdminInfo";
function AdminDetails({ adminInfo, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [active, setActive] = useState(0);

  const handleChange = (event, newValue) => {
    setActive(newValue);
  };

  return (
    <Box>
      <Tabs
        value={active}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        className="rounded"
        sx={{
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Tab label={t("ADMIN_INFO")} />
        <Tab label={t("SECURITY_SETTINGS")} />
        <Tab label={t("MANAGE_ACCESSES")} />
      </Tabs>
      <Box>
        <Box className={clsx(active == 0 ? "" : "hidden", "py-[22px]")}>
          <AdminInfo info={adminInfo} onCancelClick={onCancelClick} />
        </Box>
        <Box className={clsx(active == 1 ? "" : "hidden", "py-[22px]")}>
          <SecSettings onCancelClick={onCancelClick} />
        </Box>
        <Box className={clsx(active == 2 ? "" : "hidden", "py-[22px]")}>
          <Permissions onCancelClick={onCancelClick} />
        </Box>
      </Box>
    </Box>
  );
}
export default AdminDetails;
