import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function PoweredByLinks() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1 },
  };
  const { t } = useTranslation();
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className=" grayscale flex justify-center gap-24"
    ></motion.div>
  );
}

export default PoweredByLinks;
