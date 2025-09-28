import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Divider
} from '@mui/material';
import {
  Close as CloseIcon,
  PhotoLibrary,
  Palette,
  Checkroom,
  AttachMoney,
  Info,
  Support,
  ContactMail,
  Login,
  PersonAdd
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

function Sidebar({ open, onClose }: SidebarProps) {
  const menuItems = [
    { text: 'My Avatars', path: '/avatar-gallery', icon: <PhotoLibrary /> },
    { text: 'Customize Avatar', path: '/customization', icon: <Palette /> },
    { text: 'Virtual Try-On', path: '/outfit-try-on', icon: <Checkroom /> },
    { text: 'My Orders', path: '/pricing', icon: <AttachMoney /> },
    { text: 'About Us', path: '/about', icon: <Info /> },
    { text: 'Contact', path: '/contact', icon: <ContactMail /> },
    { text: 'Help & Support', path: '/support', icon: <Support /> },
  ];

  const authItems = [
    { text: 'Login', path: '/login', icon: <Login /> },
    { text: 'Sign Up', path: '/signup', icon: <PersonAdd /> },
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ color: '#333' }}>
          Menu
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Divider />
      
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={onClose}
              sx={{
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#333' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                sx={{ color: '#333' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ color: '#666', mb: 1 }}>
          Account
        </Typography>
      </Box>
      
      <List>
        {authItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={onClose}
              sx={{
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#333' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                sx={{ color: '#333' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
