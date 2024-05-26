import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const ButtonComponent = ({ isLoading = false, children, ...props }) => {
  const ButtonComponent = isLoading ? LoadingButton : Button;
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};

export default ButtonComponent;
