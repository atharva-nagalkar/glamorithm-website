import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box, IconButton, Badge } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, ShoppingCart } from '@mui/icons-material';
import Home from './components/Home';
import Shop from './components/Shop';
import AvatarCreation from './components/AvatarCreation';
import AvatarGallery from './components/AvatarGallery';
import Customization from './components/Customization';
import Pricing from './components/Pricing';
import About from './components/About';
import Support from './components/Support';
import OutfitTryOn from './components/OutfitTryOn';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" className="app-bar">
          <Toolbar>
            <Box component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img 
                src="/logo.jpg" 
                alt="Glamorithm" 
                style={{ 
                  height: '40px', 
                  marginRight: '8px',
                  // filter: 'brightness(0) invert(1)' // Uncomment to make logo white
                }} 
                onError={(e) => {
                  // Fallback to text if logo doesn't exist
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'block';
                  }
                }}
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'inherit',
                  display: 'none' // Hidden by default, shows if logo fails to load
                }}
              >
                Glamorithm
              </Typography>
            </Box>
            
            {/* Essential navigation items */}
            <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/shop" sx={{ mx: 1 }}>
              Shop
            </Button>
            <Button color="inherit" component={Link} to="/avatar-creation" sx={{ mx: 1 }}>
              Create Avatar
            </Button>
            
            {/* Shopping cart */}
            <IconButton color="inherit" sx={{ ml: 1 }}>
              <Badge badgeContent={0} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            
            {/* User account */}
            <IconButton color="inherit" sx={{ ml: 1 }}>
              <AccountCircle />
            </IconButton>
            
            {/* Menu button for sidebar */}
            <IconButton color="inherit" onClick={handleSidebarToggle} sx={{ ml: 1 }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <Container className="content-container" sx={{ flex: 1, py: 4 }}>
          <Box sx={{ mt: 2, mb: 6 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/avatar-creation" element={<AvatarCreation />} />
              <Route path="/avatar-gallery" element={<AvatarGallery />} />
              <Route path="/customization" element={<Customization />} />
              <Route path="/outfit-try-on" element={<OutfitTryOn />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </Box>
        </Container>
        
        <Footer />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </Box>
    </Router>
  );
}

export default App;
