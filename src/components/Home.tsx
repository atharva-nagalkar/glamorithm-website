import { Box, Typography, Button } from '@mui/material';

function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Homepage
      </Typography>
      <Typography variant="body1" paragraph>
        Eye-catching banner with tagline like “Create Your Personalized AI Avatar”. Short intro video or animation showing avatars in action.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
  );
}

export default Home;
