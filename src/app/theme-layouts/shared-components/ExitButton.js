import IconButton from '@mui/material/Button';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function ExitButton({ className }) {
    return (
        <IconButton
            component="a"
            href="/logout"
            target="_blank"
            rel="noreferrer noopener"
            role="button"
            className={clsx('', className)}
            sx={{
                color: "#fff",
                padding: "5px !important",
                border:"1px solid #f4f4f4",
                borderRadius: "50%",
                width: "40px",
                height:"40px",
                minWidth:"40px",
                minHeight:"40px",
                maxWidth:"40px",
                maxHeight:"40px",
                marginRight: "5px",
                " span" :{
                    margin:"0"
                }
            }}
            startIcon={<FuseSvgIcon size={16}>ob_icons:icon-signout</FuseSvgIcon>}
        >
        </IconButton >
    );
}

export default ExitButton;
