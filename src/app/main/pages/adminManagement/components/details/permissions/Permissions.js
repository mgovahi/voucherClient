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
  InputLabel,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";

function Permissions({ info = {}, onCancelClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [users, setUsers] = useState([
    {
      id: 1,
      title: `${t("CREATE_ADMIN_USER")}`,
    },
    {
      id: 2,
      title: `${t("CREATE_CLIENT_USER")}`,
    },
  ]);

  const [settings, setSettings] = useState([
    {
      id: 1,
      title: `${t("CURRENCY_PRICE_DEFINITION")}`,
    },
    {
      id: 2,
      title: `${t("MANAGEMENT_BANK_ACCOUNT")}`,
    },
  ]);
  const [voucher, setVoucher] = useState([
    {
      id: 1,
      title: `${t("CONFIRM_VOUCHERS")}`,
    },
    {
      id: 2,
      title: `${t("DETAILS_VIEW")}`,
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

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box>
      <Box
        className="p-[28px]  flex flex-col gap-y-[40px]  rounded-b-lg

        "
        sx={{ border: `1px solid ${theme.palette.divider}` }}
      >
        <Box className="flex justify-between items-center">
          <Typography className="font-bold " sx={{ fontSize: "14px" }}>
            {t("MANAGE_ADMIN_PERMISSIONS")}
          </Typography>
          <Box className="flex">
            {/* <FormControlLabel control={<Checkbox />} label={t("SELECT_ALL")} /> */}

            <Box className="flex justify-between items-center w-[150px] ">
              <InputLabel
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.text.grayV,
                }}
              >
                {t("SELECT_ALL")}
              </InputLabel>
              <FormControlLabel
                control={<Checkbox sx={{ marginRight: "10px" }} />}
              />
            </Box>

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
          <Box>
            <Accordion defaultExpanded sx={{ boxShadow: "none!important" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  background: theme.palette.custome.tableHeaderBg,
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {t("USERS_MANAGEMENT")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  dense
                  sx={{
                    width: "100%",
                    " li:not(:last-child)": {
                      borderBottom: `1px solid ${theme.palette.divider}`,
                    },
                  }}
                >
                  {users.map((item, idx) => {
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
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ boxShadow: "none!important" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                  background: theme.palette.custome.tableHeaderBg,
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {t("VOUCHER_MANAGEMENT")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  dense
                  sx={{
                    width: "100%",
                    " li:not(:last-child)": {
                      borderBottom: `1px solid ${theme.palette.divider}`,
                    },
                  }}
                >
                  {voucher.map((item, idx) => {
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
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{ boxShadow: "none!important" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  background: theme.palette.custome.tableHeaderBg,
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {t("SETTING_MANAGEMENT")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  dense
                  sx={{
                    width: "100%",
                    " li:not(:last-child)": {
                      borderBottom: `1px solid ${theme.palette.divider}`,
                    },
                  }}
                >
                  {settings.map((item, idx) => {
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
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Box className="flex justify-end gap-x-[16px] mt-20">
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
