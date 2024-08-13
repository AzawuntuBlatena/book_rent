import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box, Button, Drawer, IconButton,
  Typography
} from "@mui/material";
import Logo from '../Icons/Logo';
import MenuItems from './MenuItems';


interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarMenuClick?: any;
  isSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
}


const Sidebar = ({
  isMobileSidebarOpen,
  onSidebarMenuClick,
  isSidebarOpen,
  onSidebarClose
}: ItemType) => {

  return (
    <Box
      sx={{
        width: "270px",
        flexShrink: 0,
        borderRadius: "15px",
      }}
    >
      {/* ------------------------------------------- */}
      {/* Sidebar for desktop */}
      {/* ------------------------------------------- */}
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="permanent"
        PaperProps={{
          sx: {
            boxShadow: "0 9px 17.5px rgb(0,0,0,0.05)",
            width: "270px",
            boxSizing: "border-box",
            borderRight: 0,
            top: 20,
            left: 20,
            bottom: 20,
            borderRadius: "15px",
            height: "calc(100% - 40px)",
            backgroundColor: '#171B36',
            color: 'white',
            overflowX: "hidden"
          },
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar Box */}
        {/* ------------------------------------------- */}
        <Box
          sx={{
            height: "100%",
          }}
        >
          {/* ------------------------------------------- */}
          {/* Logo */}
          {/* ------------------------------------------- */}
          <Box sx={{
            p: 2,
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "15px"
          }
          }>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => onSidebarMenuClick((previous: any) => !previous)}
            >
              <MenuIcon />
            </IconButton>
            <Box component="span" sx={{ color: '#0088cc', m: 0, p: 0 }}>
              <Logo width={37} height={30} color='#00ABFF' />
            </Box>
            <Typography variant="h6" component="div" sx={{
              color: '#00ABFF',

            }}>
              Book Rent
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <MenuItems />
          </Box>
        </Box>
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Button
            variant="contained"
            startIcon={<ExitToAppIcon />}
            fullWidth
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
    </Box>
  );

};

export default Sidebar;
