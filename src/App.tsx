import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import Home from './components/Home';
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
            <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
              Glamorithm
            </Typography>
            
            {/* Essential navigation items */}
            <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/avatar-creation" sx={{ mx: 1 }}>
              Create Avatar
            </Button>
            
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
        
        <Container className="content-container" sx={{ flex: 1 }}>
          <Box sx={{ mt: 3, mb: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
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
