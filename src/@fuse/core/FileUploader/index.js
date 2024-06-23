// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// ** Third Party Imports
import FuseSvgIcon from "../FuseSvgIcon/FuseSvgIcon";
import { useDropzone } from "react-dropzone";

import FormHelperText from "@mui/material/FormHelperText";
import { Button, CircularProgress, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import ButtonComponent from "app/shared-components/ButtonComponent/ButtonComponent";
import { useTheme } from "@mui/styles";
import FormErrorHelperText from "app/shared-components/FormErrorHelperText/FormErrorHelperText";

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(4),
  },
}));

const FileUploaderSingle = (props) => {
  // ** State
  const [file, setFile] = useState({});
  const { value, readOnly, disabled, error } = props;
  const { t } = useTranslation();
  const theme = useTheme();

  // ** Hook
  const { acceptedFiles, getRootProps, open, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    onDrop: (acceptedFiles) => {
      const firstFile = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFile(firstFile[0]);
      if (props.onChange) {
        props.onChange(firstFile[0]);
      }
    },
  });
  const handleLinkClick = (event) => {
    event.preventDefault();
  };

  const handleFileRemove = (e) => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    setFile({});
    props.onChange({});
  };

  return (
    <>
      <input {...getInputProps()} />
      <Box
        position="relative"
        width="100%"
        backgroundColor="primary.light"
        borderColor="primary.main"
      >
        <InputLabel htmlFor={props.id} error={error}>
          {props.label}
        </InputLabel>
        <OutlinedInput
          {...getRootProps({ className: "dropzone" })}
          type={"text"}
          sx={{
            width: "100%",
            height: "auto",
            minHeight:
              file.preview && error?.type !== "validate" ? "300px" : "200px",
            maxHeight: "300px",
            zIndex: "1",
            ".MuiOutlinedInput-notchedOutline": {
              border: `1px dashed ${theme.palette.primary.main}`,
            },
          }}
          id={props.id}
          // value={value ? value : file && file.name ? file.name : ""}
          readOnly={readOnly}
          disabled={disabled}
          error={!!error}
          inputProps={{
            sx: {
              fontFamily: "IransansxRE !important",
              backgroundColor: theme.palette.primary.light + " !important",
            },
          }}
          endAdornment={
            <InputAdornment position="end" sx={{ marginLeft: "0" }}>
              {/* { file.name || value ?
                 <CloseCircleOutline
                 sx={{cursor:"pointer"}}
                 onClick={handleFileRemove} /> :  */}
              {props.loading ? (
                <CircularProgress size={16} />
              ) : (
                <FuseSvgIcon>ob_icons:icon-paper-upload</FuseSvgIcon>
              )}
            </InputAdornment>
          }
        />
        <Box
          sx={{
            position: "absolute",
            right: "0",
            left: "0",
            bottom: "0",
            top: "0",
            gap: "14px",
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {file.preview && error?.type !== "validate" ? (
            <Box
              sx={{
                zIndex: 2,
                position: "relative",
                "&:hover": {
                  ".img-hover": {
                    backgroundColor: "rgba(0,0,0)",
                    opacity: 0.45,
                  },
                },
              }}
            >
              <Box
                component="img"
                src={file.preview}
                alt={file.name}
                sx={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "6px",
                }}
              />
              <Box className="img-hover absolute top-0 rounded-6 w-full h-full opacity-0 transition-all duration-400 flex items-center justify-center">
                <Button onClick={handleFileRemove} className="p-0">
                  <FuseSvgIcon sx={{ zIndex: 2 }} color="white">
                    heroicons-outline:trash
                  </FuseSvgIcon>
                </Button>
              </Box>
            </Box>
          ) : (
            <FuseSvgIcon size={48} color={theme.palette.primary.main}>
              mv-icons:icon-CloudUpload
            </FuseSvgIcon>
          )}

          <Typography variant="body2" color="primary" sx={{ zIndex: 2 }}>
            {t("UPLOADER_ALERT")}
          </Typography>
          <ButtonComponent
            sx={{
              width: "fit-content",
              zIndex: 2,
            }}
            color="primary"
            size="small"
            variant="contained"
            isLoading={props.loading}
            onClick={open}
          >
            {t("SELECT_ATTACHMENT")}
          </ButtonComponent>
        </Box>
      </Box>
      {error ? (
        <FormErrorHelperText error={error} />
      ) : (
        // props.error.message.map((error) => (
        //     <FormHelperText>{t("error")}</FormHelperText>
        //   ))
        props.helperText && (
          <FormHelperText sx={{ color: theme.palette.text.grayV }}>
            {t(props.helperText)}
          </FormHelperText>
        )
      )}
    </>
  );
};

export default FileUploaderSingle;
