import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Home from './components/Home';
import AvatarCreation from './components/AvatarCreation';
import AvatarGallery from './components/AvatarGallery';
import Customization from './components/Customization';
import Pricing from './components/Pricing';
import About from './components/About';
import Support from './components/Support';
import OutfitTryOn from './components/OutfitTryOn';

function App() {
  return (
    <Router>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Glimorithim
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/avatar-creation">Create Avatar</Button>
          <Button color="inherit" component={Link} to="/avatar-gallery">Gallery</Button>
          <Button color="inherit" component={Link} to="/customization">Customize Avatar</Button>
          <Button color="inherit" component={Link} to="/outfit-try-on">Outfit Try-On</Button>
          <Button color="inherit" component={Link} to="/pricing">Pricing</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/support">Support</Button>
        </Toolbar>
      </AppBar>
      <Container className="content-container">
        <Box sx={{ mt: 3 }}>
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
    </Router>
  );
}

export default App;
