import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ py: 8 }} className="animate-fadeInUp">
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 8 }} className="animate-slideInLeft">
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            mb: 3,
            background: 'linear-gradient(45deg, #333 30%, #666 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Shop Clothes on Your AI Avatar
        </Typography>
        
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            mb: 4, 
            color: '#666',
            fontWeight: 300,
            lineHeight: 1.6
          }}
        >
          Create your personalized AI avatar from your photo, try on thousands of outfits virtually, 
          and shop with confidence knowing exactly how clothes will look on your body.
        </Typography>
        
        <Box sx={{ mt: 4, mb: 6 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            component={Link}
            to="/avatar-creation"
            sx={{ 
              px: 4, 
              py: 2, 
              fontSize: '1.1rem',
              borderRadius: 2,
              mr: 2,
              mb: { xs: 2, sm: 0 }
            }}
          >
            Create My Avatar
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
            component={Link}
            to="/shop"
            sx={{ 
              px: 4, 
              py: 2, 
              fontSize: '1.1rem',
              borderRadius: 2
            }}
          >
            Browse Clothes
          </Button>
        </Box>
      </Container>
      
      {/* Quick Features Preview */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" component="h3" sx={{ textAlign: 'center', mb: 4, color: '#333' }}>
          Why Choose Glamorithm?
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          mt: 4
        }}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h1" sx={{ color: '#333', mb: 2 }}>🤖</Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
              AI-Powered Accuracy
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
              Advanced AI creates avatars that match your exact body structure
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h1" sx={{ color: '#333', mb: 2 }}>👗</Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
              Virtual Try-On
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
              See exactly how clothes will look before you buy
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h1" sx={{ color: '#333', mb: 2 }}>🔒</Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
              Privacy First
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
              Your data is secure and never shared with third parties
            </Typography>
          </Box>
        </Box>
        
      </Container>
    </Box>
  );
}

export default Home;
