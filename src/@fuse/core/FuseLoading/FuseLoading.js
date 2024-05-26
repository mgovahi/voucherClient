import { useTimeout } from '@fuse/hooks';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/styles';

function FuseLoading(props) {
  const [showLoading, setShowLoading] = useState(!props.delay);
  const { t } = useTranslation();
  const theme = useTheme();
  useTimeout(() => {
    setShowLoading(true);
  }, props.delay);

  console.log(theme.palette);
  return (
    <div
      className={clsx(
        'flex flex-1 flex-col items-center justify-center p-24',
        !showLoading && 'hidden'
      )}
    >
      <Typography className="text-13 sm:text-16 font-medium -mb-16" color="primary.main">
        {t("LOADING")}
      </Typography>
      <Box
        id="spinner"
        sx={{
          '& > div': {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </Box>
    </div>
  );
}

FuseLoading.propTypes = {
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

FuseLoading.defaultProps = {
  delay: false,
};

export default FuseLoading;
