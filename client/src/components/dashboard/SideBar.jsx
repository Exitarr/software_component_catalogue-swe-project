import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems} from './listItems';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import styled from '@mui/material/styles/styled';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      height : "100%",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        height : "100%",
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));


const SideBar = (props) => {
    const {open, toggleDrawer} = props;

    return(
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            {open && <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>}
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
          </List>
        </Drawer>
    )
}

export default SideBar;