import { Radio } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#fff",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: `2px auto ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
  },
}));

const CustomCheckedIcon = styled(CustomIcon)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const CustomRadio = (props) => {
  return (
    <Radio
      color="default"
      checkedIcon={<CustomCheckedIcon />}
      icon={<CustomIcon />}
      {...props}
      sx={{padding: 0, paddingTop: "3px", "&:hover": { backgroundColor: "#f1f0f7" } }}
    />
  );
};

export default CustomRadio;
