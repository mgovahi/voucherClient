import IconButton from '@mui/material/Button';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useTranslation } from 'react-i18next';
import { useTheme } from "@mui/material/styles";
import {
   Box,Typography
  } from "@mui/material";
function DollarLivePrice(){
    const {t} = useTranslation();
    const theme = useTheme();
 return(<>
    <Box className={"flex gap-x-[8px] justify-center items-center"}>
    <Typography >
        <FuseSvgIcon size={24} sx={{opacity:"0.8",mr:"4px"}}>mv-icons:icon-LocalAtm</FuseSvgIcon>
        {t("VOUCHER_DOLLAR")}:
    </Typography>
    <Typography color={theme.palette.custome.green}>64,300 {t("TOMAN")}</Typography>
    <Typography variant='caption' className='rounded bg-white px-8' sx={{
        color: theme.palette.custome.green2,
        opacity:0.88,
        lineHeight:"16px"
    }}>2.5%</Typography>

    </Box>
 </>)
}

export default DollarLivePrice;