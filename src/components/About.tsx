import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import { AutoAwesome, Security, Speed, Palette } from '@mui/icons-material';

function About() {
  const features = [
    {
      icon: <AutoAwesome />,
      title: 'AI-Powered Technology',
      description: 'Advanced machine learning algorithms analyze your body structure to create accurate avatars.'
    },
    {
      icon: <Security />,
      title: 'Privacy First',
      description: 'Your photos and data are processed securely with end-to-end encryption and never shared.'
    },
    {
      icon: <Speed />,
      title: 'Instant Results',
      description: 'Generate your avatar in seconds and start trying on clothes immediately.'
    },
    {
      icon: <Palette />,
      title: 'Endless Customization',
      description: 'Modify every aspect of your avatar from hairstyles to accessories.'
    }
  ];

  const team = [
    { name: 'Sarah Chen', role: 'AI Research Lead', avatar: '👩‍💻' },
    { name: 'Alex Kumar', role: 'Fashion Tech Director', avatar: '👨‍🎨' },
    { name: 'Maya Patel', role: 'UX Design Head', avatar: '👩‍🎨' },
    { name: 'David Kim', role: 'Engineering Manager', avatar: '👨‍💻' }
  ];

  return (
    <Container maxWidth="lg" className="animate-fadeInUp">
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 3
          }}
        >
          About Glamorithm
        </Typography>
        <Typography variant="h5" sx={{ color: '#666', mb: 4, maxWidth: 800, mx: 'auto' }}>
          We're revolutionizing online fashion shopping by combining AI avatar technology 
          with virtual try-on experiences, making it easier than ever to find clothes that fit perfectly.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Chip label="Founded in 2024" variant="outlined" />
          <Chip label="AI-Powered" variant="outlined" />
          <Chip label="Privacy-First" variant="outlined" />
          <Chip label="Fashion Tech" variant="outlined" />
        </Box>
      </Box>

      {/* Mission Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Mission
        </Typography>
        <Typography variant="h6" sx={{ 
          color: '#666', 
          maxWidth: 700, 
          mx: 'auto',
          lineHeight: 1.8,
          fontWeight: 300
        }}>
          To eliminate the guesswork in online fashion shopping by providing personalized, 
          AI-generated avatars that accurately represent your body type, allowing you to 
          confidently purchase clothes that look and fit exactly as expected.
        </Typography>
      </Box>

      {/* Features Grid */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 6 }}>
          What Makes Us Special
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ 
                height: '100%',
                p: 3,
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.15)'
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ 
                      bgcolor: 'primary.main', 
                      mr: 2,
                      width: 56,
                      height: 56
                    }}>
                      {feature.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 6 }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                textAlign: 'center',
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}>
                <Typography variant="h1" sx={{ mb: 2 }}>
                  {member.avatar}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {member.role}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Stats Section */}
      <Box sx={{ 
        textAlign: 'center',
        py: 6,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        borderRadius: 3,
        mb: 4
      }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
              10K+
            </Typography>
            <Typography variant="h6" sx={{ color: '#666' }}>
              Avatars Created
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
              50K+
            </Typography>
            <Typography variant="h6" sx={{ color: '#666' }}>
              Virtual Try-Ons
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
              95%
            </Typography>
            <Typography variant="h6" sx={{ color: '#666' }}>
              Customer Satisfaction
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
