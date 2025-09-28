import { Box, Typography, Container, IconButton, Divider, Link } from '@mui/material';
import { GitHub, Twitter, Instagram, Email, Favorite } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 2,
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1
        }}>
          {/* Brand & Links */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              Glamorithm
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 250, fontSize: '0.875rem', mb: 1 }}>
              AI-powered avatar shopping
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Link 
                component={RouterLink} 
                to="/about" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  fontSize: '0.875rem',
                  opacity: 0.9,
                  '&:hover': { opacity: 1, textDecoration: 'underline' }
                }}
              >
                About
              </Link>
              <Link 
                component={RouterLink} 
                to="/contact" 
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  fontSize: '0.875rem',
                  opacity: 0.9,
                  '&:hover': { opacity: 1, textDecoration: 'underline' }
                }}
              >
                Contact
              </Link>
            </Box>
          </Box>
          
          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton 
              color="inherit" 
              sx={{ 
                '&:hover': { 
                  transform: 'translateY(-2px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ 
                '&:hover': { 
                  transform: 'translateY(-2px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ 
                '&:hover': { 
                  transform: 'translateY(-2px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <Instagram />
            </IconButton>
            <IconButton 
              color="inherit"
              sx={{ 
                '&:hover': { 
                  transform: 'translateY(-2px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
        
        <Divider sx={{ my: 1.5, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 0.5
        }}>
          <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.8rem' }}>
            © 2024 Glamorithm. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.8rem' }}>
              Made with
            </Typography>
            <Favorite sx={{ fontSize: 14, color: '#ff6b6b' }} />
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.8rem' }}>
              for fashion
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
