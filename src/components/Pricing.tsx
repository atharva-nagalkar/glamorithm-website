import { Box, Typography, Card, CardContent } from '@mui/material';

function Pricing() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Pricing
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Free</Typography>
          <Typography variant="body2">Basic features</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Premium</Typography>
          <Typography variant="body2">Advanced features</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Pricing;
