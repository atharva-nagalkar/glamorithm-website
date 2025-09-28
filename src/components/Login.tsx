import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  TextField,
  Button,
  Divider,
  IconButton,
  Alert,
  Link
} from '@mui/material';
import {
  Google,
  Facebook,
  Visibility,
  VisibilityOff,
  Login as LoginIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle login logic
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    // Simulate login success
    console.log('Login attempt:', formData);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card sx={{ 
        p: 6,
        boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
        borderRadius: 3,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
      }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <LoginIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ fontWeight: 'bold' }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Sign in to your Glamorithm account
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Social Login */}
        <Box sx={{ mb: 4 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            sx={{ 
              mb: 2, 
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            Continue with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Facebook />}
            sx={{ 
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            Continue with Facebook
          </Button>
        </Box>

        <Divider sx={{ mb: 4 }}>
          <Typography variant="body2" sx={{ color: '#666' }}>
            or sign in with email
          </Typography>
        </Divider>

        {/* Login Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            sx={{ 
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2
              }
            }}
          />
          
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleInputChange}
            required
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )
            }}
            sx={{ 
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2
              }
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              py: 2,
              mb: 3,
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
            Sign In
          </Button>

          <Box sx={{ textAlign: 'center' }}>
            <Link href="#" underline="hover" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
              Forgot your password?
            </Link>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Don't have an account?{' '}
              <Link component={RouterLink} to="/signup" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Sign up here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}

export default Login;
