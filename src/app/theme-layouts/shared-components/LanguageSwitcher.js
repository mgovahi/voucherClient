import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeLanguage,
  selectCurrentLanguage,
  selectLanguages,
} from "app/store/i18nSlice";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

function LanguageSwitcher(props) {
  const currentLanguage = useSelector(selectCurrentLanguage);
  const languages = useSelector(selectLanguages);
  const [menu, setMenu] = useState(null);
  const dispatch = useDispatch();

  const langMenuClick = (event) => {
    setMenu(event.currentTarget);
  };

  const langMenuClose = () => {
    setMenu(null);
  };

  function handleLanguageChange(lng) {
    dispatch(changeLanguage(lng.id));

    langMenuClose();
  }

  return (
    <>
      <Button className="h-28 min-h-28 w-52 min-w-52 p-4 gap-4 ltr:flex-row-reverse" onClick={langMenuClick} sx={{backgroundColor: "rgba(188, 74, 231, 0.24)"}}>
        {/* <img
          className="mx-4 min-w-20"
          src={`assets/images/flags/${currentLanguage.flag}.svg`}
          alt={currentLanguage.title}
        /> */}

        <Typography
          className="font-semibold uppercase"
          color="text.grayDay"
          variant="body1"
        >
          {currentLanguage.id}
        </Typography>
        <FuseSvgIcon size={20}>{`mv-icons-mc:icon-Language`}</FuseSvgIcon>
      </Button>

      <Popover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={langMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          paper: "py-8",
        }}
      >
        {languages.map((lng) => (
          <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
            <ListItemIcon className="min-w-40">
              {/* <img
                className="min-w-20"
                src={`assets/images/flags/${lng.flag}.svg`}
                alt={lng.title}
              /> */}
              <FuseSvgIcon>{`mv-icons-mc:icon-flag-${lng.flag}`}</FuseSvgIcon>
            </ListItemIcon>
            <ListItemText primary={lng.title} />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}

export default LanguageSwitcher;
