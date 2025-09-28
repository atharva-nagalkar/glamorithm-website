import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" paragraph>
        Step-by-step guide: Upload → AI Generation → Customize → Save/Share.
      </Typography>
    </Box>
  );
}

export default About;
