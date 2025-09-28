import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  TextField,
  Button,
  IconButton,
  Chip,
  Alert
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  LinkedIn,
  Twitter,
  Instagram
} from '@mui/icons-material';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email Us',
      content: 'hello@glamorithm.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: <LocationOn />,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      subtitle: 'By appointment only'
    }
  ];

  return (
    <Container maxWidth="lg" className="animate-fadeInUp">
      {/* Header */}
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
          Get In Touch
        </Typography>
        <Typography variant="h5" sx={{ color: '#666', mb: 4, maxWidth: 600, mx: 'auto' }}>
          Have questions about our AI avatar technology? Need help with your account? 
          We'd love to hear from you!
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Chip label="24/7 Support" variant="outlined" />
          <Chip label="Quick Response" variant="outlined" />
          <Chip label="Expert Team" variant="outlined" />
        </Box>
      </Box>

      <Grid container spacing={6}>
        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Card sx={{ 
            p: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            borderRadius: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 12px 48px rgba(0,0,0,0.15)'
            }
          }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Send us a Message
            </Typography>
            
            {showSuccess && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)'
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)'
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)'
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)'
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    sx={{
                      px: 4,
                      py: 2,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Contact Information
            </Typography>
            
            {contactInfo.map((info, index) => (
              <Card key={index} sx={{ 
                mb: 3,
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateX(8px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    p: 1.5,
                    borderRadius: 2,
                    mr: 2
                  }}>
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {info.subtitle}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                  {info.content}
                </Typography>
              </Card>
            ))}
          </Box>

          {/* Social Media */}
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                sx={{ 
                  bgcolor: '#1976d2',
                  color: 'white',
                  '&:hover': { 
                    bgcolor: '#1565c0',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                sx={{ 
                  bgcolor: '#1da1f2',
                  color: 'white',
                  '&:hover': { 
                    bgcolor: '#1991db',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                sx={{ 
                  bgcolor: '#e4405f',
                  color: 'white',
                  '&:hover': { 
                    bgcolor: '#d73559',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* FAQ Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, height: '100%', textAlign: 'left' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                How accurate are the AI avatars?
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Our AI technology creates avatars with 95% accuracy in body measurements and proportions, 
                ensuring clothes fit virtually as they would in real life.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, height: '100%', textAlign: 'left' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Is my data secure?
              </Typography>
              <Typography variant="body1" sx={{ color: '#666' }}>
                Yes! We use end-to-end encryption and never store your photos permanently. 
                All data is processed securely and deleted after avatar creation.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;
