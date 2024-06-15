import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import FuseNavItem from '../FuseNavItem';
import { useSelector } from 'react-redux';
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice';

const StyledList = styled(List)(({ theme, ...props }) => ({
  '& .fuse-list-item': {
    color: theme.palette.text.primary,
    marginBottom: "20px",
    '&:hover': {
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,.04)',
    },
    '&:focus:not(.active)': {
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0,0,0,.05)',
    },
    '&.active': {
      '& .fuse-list-item-text-primary': {
        fontWeight: 'bold',
      },
    }
  },
  '& .fuse-list-item-text': {
    margin: 0,
  },
  '& .fuse-list-item-text-primary': {
    lineHeight: '20px',
    fontSize: "16px",
    ...(props.currentDir === "ltr" && {
      fontFamily: "Aeonis",
      fontWeight: 'bold',
    }),
  },
  '&.active-square-list': {
    '& .fuse-list-item, & .active.fuse-list-item': {
      width: '100%',
      borderRadius: '0',
    },
  },
  '&.dense': {
    '& .fuse-list-item': {
      paddingTop: 0,
      paddingBottom: 0,
      height: 32,
    },
  },
}));

function FuseNavVerticalLayout1(props) {
  const { navigation, layout, active, dense, className, onItemClick } = props;
  const dispatch = useDispatch();
  const currentDir = useSelector(selectCurrentLanguageDirection);

  function handleItemClick(item) {
    onItemClick?.(item);
  }

  return (
    <StyledList
      className={clsx(
        'navigation whitespace-nowrap py-0',
        `active-${active}-list`,
        dense && 'dense',
        className
      )}
      currentDir={currentDir}
    >
      {navigation.map((_item) => (
        <FuseNavItem
          key={_item.id}
          type={`vertical-${_item.type}`}
          item={_item}
          nestedLevel={0}
          onItemClick={handleItemClick}
        />
      ))}
    </StyledList>
  );
}

export default FuseNavVerticalLayout1;
