import { useState, useEffect } from 'react';
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
    { name: 'Utkarsh Maurya', role: 'Manager and CFO', avatar: '👨‍💼' },
    { name: 'Atharva Nagalkar', role: 'App Developer', avatar: '👨‍💻' },
    { name: 'Saloni', role: 'Fashion Designer and Founder', avatar: '👩‍🎨' },
    { name: 'Jagriti', role: 'Marketing and Branding', avatar: '👩‍💼' }
  ];

  // Counter animation hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let startTime: number;
      let animationFrame: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);
    
    return count;
  };

  const avatarsCount = useCounter(10000, 2500);
  const tryOnsCount = useCounter(50000, 3000);
  const satisfactionCount = useCounter(95, 2000);

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

      {/* How It Works Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 6 }}>
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

      {/* Privacy Section */}
      <Box sx={{ mb: 8, textAlign: 'center', py: 6, backgroundColor: '#f8f9fa', borderRadius: 3 }}>
        <Typography variant="h4" component="h3" sx={{ mb: 4, color: '#333', fontWeight: 'bold' }}>
          Your Privacy is Our Priority
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#666', fontSize: '1.1rem', maxWidth: 600, mx: 'auto' }}>
          All your photos and avatar data are processed securely and stored privately. 
          We never share your personal information or body measurements with third parties.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
          <Chip icon={<Typography>🔒</Typography>} label="End-to-End Encryption" variant="outlined" />
          <Chip icon={<Typography>🛡️</Typography>} label="Private Data Storage" variant="outlined" />
          <Chip icon={<Typography>🚫</Typography>} label="No Data Sharing" variant="outlined" />
        </Box>
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
              {avatarsCount.toLocaleString()}+
            </Typography>
            <Typography variant="h6" sx={{ color: '#666' }}>
              Avatars Created
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
              {tryOnsCount.toLocaleString()}+
            </Typography>
            <Typography variant="h6" sx={{ color: '#666' }}>
              Virtual Try-Ons
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
              {satisfactionCount}%
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
