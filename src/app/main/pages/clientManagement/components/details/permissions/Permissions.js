import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

function Permissions({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [permissions, setPermissions] = useState([
    {
      id: 1,
      title: "استفاده از حواله",
    },
    {
      id: 2,
      title: "امکان صدور حواله",
    },
    {
      id: 3,
      title: "امکان لغو خواله",
    },
  ]);
  const [selected, setSelected] = useState({});
  const handleToggle = (e, id) => {
    let list = { ...selected };
    if (e.target.checked) {
      list[id] = true;
    } else {
      delete list[id];
    }
    setSelected(list);
  };
  const loading = false;
  return (
    <Box>
      <Box
        className="p-[16px] flex flex-col gap-y-[40px]"
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <Box className="flex justify-between items-center">
          <Typography className="font-bold">
            {t("MANAGE_CLIENT_PERMISSIONS")}
          </Typography>
          <Box>
            <FormControlLabel control={<Checkbox />} label={t("SELECT_ALL")} />
            <TextField
              sx={{ flex: 1 }}
              size="small"
              InputProps={{
                autocomplete: "off",
                endAdornment: (
                  <IconButton onClick={() => {}}>
                    <FuseSvgIcon sx={{ stroke: "transparent !important" }}>
                      mv-icons:icon-Search_Icon
                    </FuseSvgIcon>
                  </IconButton>
                ),
              }}
              label={t("SEARCH")}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              background: theme.palette.custome.tableHeaderBg,
              padding: "16px",
              fontWeight: "bold",
            }}
          >
            {t("CLIENT_PERMISSION")}
          </Typography>
          <List
            dense
            sx={{
              width: "100%",
              " li:not(:last-child)": {
                borderBottom: `1px solid ${theme.palette.divider}`,
              },
            }}
          >
            {permissions.map((item, idx) => {
              return (
                <ListItem
                  key={item.id}
                  className="flex justify-between  text-right"
                >
                  <Typography className="w-[50%] text-base">
                    {item.title}
                  </Typography>
                  <Box className="w-[50%]">
                    <Checkbox
                      value={item.id}
                      onChange={(e) => handleToggle(e, item.id)}
                    />
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box className="flex justify-end gap-x-[20px] mt-20">
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
            color="info"
            size="middle"
            variant="contained"
            isLoading={loading}
            // disabled={loading}
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
  );
}
export default Permissions;
