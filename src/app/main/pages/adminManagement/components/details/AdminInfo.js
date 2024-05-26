import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import {
  CircularProgress,
  TextField,
  Typography,
  Chip,
  Switch,
  InputLabel,
  FormControlLabel,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { InfoRounded } from "@mui/icons-material";
import FusePageSimpleHeader from "@fuse/core/FusePageSimple/FusePageSimpleHeader";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

function AdminInfo({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [status, setStatus] = useState(info.status || "INACTIVE");
  const handleChange = (event, newValue) => {
    setActive(newValue);
  };
  const statusMap = {
    ACTIVE: "فعال",
    INACTIVE: "غیرفعال",
  };
  const onStatusChange = (e) => {
    setStatus(e.target.checked ? "ACTIVE" : "INACTIVE");
  };
  const handleSaveClick = () => {};
  const loading = false;
  return (
    <Box>
      <Box
        className="p-[16px] rounded flex gap-x-[40px]"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <Box
          className="rounded flex justify-center items-center"
          sx={{
            width: "160px",
            height: "160px",
            backgroundColor: "#f3f8ff",
          }}
        >
          <FuseSvgIcon size={100} sx={{ color: "#fff" }}>
            mv-icons:icon-User-_-Light-_-Duotone
          </FuseSvgIcon>
        </Box>
        <Box className="flex-1 flex flex-col justify-between">
          <Box className="relative">
            <Typography variant="h6" className="font-bold text-xl mb-[12px]">
              {info.firstName + " " + info.lastName}
            </Typography>
            <Typography
              caption="body2"
              className="flex gap-x-[20px]"
              color={[theme.palette.text.grayDay]}
              sx={{
                " svg": {
                  marginRight: "7px",
                },
              }}
            >
              <span>
                <FuseSvgIcon size={16}>
                  mv-icons-mc:icon-User-_-Light-_-Duotone
                </FuseSvgIcon>
                مشتری
              </span>
              <span>
                <FuseSvgIcon size={16}>
                  mv-icons-mc:icon-profile-mobile
                </FuseSvgIcon>
                {info.mobile}
              </span>
              <span>
                <FuseSvgIcon size={16}>
                  mv-icons-mc:icon-At-_-Light-_-Duotone
                </FuseSvgIcon>
                {info.email}
              </span>
            </Typography>
            <Chip
              skin="light"
              label={statusMap[info.status]}
              color={
                info.status == "ACTIVE"
                  ? "successLight"
                  : info.status == "INACTIVE"
                  ? "errorLight"
                  : "successLight"
              }
              sx={{
                position: "absolute",
                top: "0",
                right: "16px",
                height: 20,
                maxWidth: "initial",
                mt: 0.4,
                fontSize: "1.1rem",
                fontWeight: "normal",
              }}
            ></Chip>
          </Box>
        </Box>
      </Box>

      <Box
        className=" p-[16px] gap-x-[40px] gap-y-[20px] mt-[24px] rounded"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <FusePageSimpleHeader
          header={t("USER_INFO")}
          inner
          sx={{ width: "full" }}
        ></FusePageSimpleHeader>
        <Box className="rounded grid grid-cols-2 gap-x-[40px] gap-y-[20px] mt-[24px]">
          <TextField
            sx={{ flex: 1 }}
            value={info.firstName || " "}
            label={t("NAME")}
            disabled
          />
          <TextField
            sx={{ flex: 1 }}
            value={info.lastName || " "}
            label={t("LAST_NAME")}
            disabled
          />
          <TextField
            sx={{ flex: 1 }}
            value={info.mobile || " 09123546258"}
            label={t("MOBILE")}
            disabled
          />
          <TextField
            sx={{ flex: 1 }}
            value={info.email || " mmm@mm.com"}
            label={t("EMAIL")}
            disabled
          />
          <TextField
            sx={{ flex: 1 }}
            value={info.adminId || "544747878745"}
            label={t("ADMIN_ID")}
            disabled
          />
          <TextField
            sx={{ flex: 1 }}
            value={info.createDate || "1403/01/25  23:10:13 "}
            label={t("CREATE_DATE")}
            disabled
          />
          <Box className="flex justify-between ">
            <InputLabel sx={{ fontSize: "14px" }}>
              {t("ADMIN_STATE")}
            </InputLabel>
            <FormControlLabel
              control={<Switch color="info" />}
              label={statusMap[status]}
              labelPlacement="start"
              onChange={onStatusChange}
            />
          </Box>
          <Box className="col-span-2 flex justify-end gap-x-[20px]">
            <ButtonComponent
              sx={{
                width: { xs: "100%", sm: "fit-content" },
              }}
              onClick={onCancelClick}
              color="default"
              size="middle"
              variant="outlined"
              isLoading={loading}
              // disabled={loading}
            >
              {t("CANCEL")}
            </ButtonComponent>
            <ButtonComponent
              sx={{
                width: { xs: "100%", sm: "fit-content" },
              }}
              onClick={handleSaveClick}
              color="info"
              size="middle"
              variant="contained"
              // disabled={loading}
              isLoading={loading}
              endIcon={
                loading ? (
                  <CircularProgress size={16} sx={{ color: "#fff" }} />
                ) : (
                  <FuseSvgIcon color={theme.palette.common.white} size={20}>
                    mv-icons:icon-Check
                  </FuseSvgIcon>
                )
              }
            >
              {t("SAVE_INFO")}
            </ButtonComponent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default AdminInfo;
