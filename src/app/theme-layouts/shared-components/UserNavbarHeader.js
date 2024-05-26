import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectUser } from "app/store/userSlice";
import { useTheme } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navbarToggle, navbarToggleMobile } from "app/store/mv/navbarSlice";
const Root = styled("div")(({ theme }) => ({
  "& .username, & .email": {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },

  "& .avatar": {
    background: theme.palette.background.default,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    "& > img": {
      borderRadius: "50%",
    },
  },
}));

function UserNavbarHeader(props) {
  const user = useSelector(selectUser);
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Root
      className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0"
      onClick={() => {
        navigate("/profile");
        dispatch(navbarToggleMobile());
      }}
    >
      <div className="flex items-center justify-center mb-4 mt-16">
        <Avatar
          className="md:mx-4"
          sx={{ backgroundColor: theme.palette.secondary.main }}
        />
      </div>
    </Root>
  );
}

export default UserNavbarHeader;
