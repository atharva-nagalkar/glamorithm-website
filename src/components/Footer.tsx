import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { GitHub, Twitter, Instagram, Email } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Glamorithm
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Create stunning AI-powered avatars with our advanced customization tools.
              Transform your photos into personalized digital representations.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <Link href="/avatar-creation" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
              Create Avatar
            </Link>
            <Link href="/customization" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
              Customize
            </Link>
            <Link href="/outfit-try-on" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
              Try Outfits
            </Link>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="/about" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link href="/pricing" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
              Pricing
            </Link>
            <Link href="/support" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
              Support
            </Link>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <IconButton color="inherit" aria-label="GitHub">
                <GitHub />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="Email">
                <Email />
              </IconButton>
            </Box>
            <Typography variant="body2">
              Stay updated with our latest features and avatar creation tips.
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid #555', mt: 4, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            © 2024 Glamorithm. All rights reserved. | Privacy Policy | Terms of Service
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
