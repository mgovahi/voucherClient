import React from "react";
import { Box } from "@mui/system";

const ButtonBox = ({ children }) => {
  return (
    <Box className="flex justify-center mt-32 mb-24 flex-col-reverse sm:flex-row gap-20">
      {children}
    </Box>
  );
};

export default ButtonBox;
