import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
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
      
      {/* Features Preview */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" component="h3" sx={{ textAlign: 'center', mb: 4, color: '#333' }}>
          How Glamorithm Works
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          gap: 4,
          mt: 4
        }}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h1" sx={{ color: '#333', mb: 2 }}>📸</Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
              Upload Photo
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
              Upload your full-body photo for AI analysis
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h1" sx={{ color: '#333', mb: 2 }}>🤖</Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
              AI Avatar Creation
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
              Generate your personalized avatar with accurate body structure
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h1" sx={{ color: '#333', mb: 2 }}>👗</Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
              Virtual Try-On
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
              Try thousands of outfits on your avatar instantly
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h1" sx={{ color: '#333', mb: 2 }}>🛒</Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
              Shop & Order
            </Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>
              Order clothes that you know will look perfect on you
            </Typography>
          </Box>
        </Box>
        
        {/* Featured Categories */}
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <Typography variant="h4" component="h3" sx={{ textAlign: 'center', mb: 6, color: '#333' }}>
            Shop by Category
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                <CardMedia
                  sx={{ height: 200, backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Typography variant="h2">👔</Typography>
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom>
                    Formal Wear
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Professional attire for work and special occasions
                  </Typography>
                  <Chip label="500+ Items" size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                <CardMedia
                  sx={{ height: 200, backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Typography variant="h2">👕</Typography>
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom>
                    Casual Wear
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Comfortable everyday clothing for all occasions
                  </Typography>
                  <Chip label="1200+ Items" size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                <CardMedia
                  sx={{ height: 200, backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Typography variant="h2">👗</Typography>
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom>
                    Party Wear
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stunning outfits for parties and celebrations
                  </Typography>
                  <Chip label="800+ Items" size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                <CardMedia
                  sx={{ height: 200, backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Typography variant="h2">👟</Typography>
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom>
                    Accessories
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Shoes, bags, jewelry and more to complete your look
                  </Typography>
                  <Chip label="600+ Items" size="small" sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
      
      {/* Trust & Privacy Section */}
      <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center', py: 6, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
        <Typography variant="h4" component="h3" sx={{ mb: 4, color: '#333' }}>
          Your Privacy is Our Priority
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#666', fontSize: '1.1rem' }}>
          All your photos and avatar data are processed securely and stored privately. 
          We never share your personal information or body measurements with third parties.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
          <Chip icon={<Typography>🔒</Typography>} label="End-to-End Encryption" variant="outlined" />
          <Chip icon={<Typography>🛡️</Typography>} label="Private Data Storage" variant="outlined" />
          <Chip icon={<Typography>🚫</Typography>} label="No Data Sharing" variant="outlined" />
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
