import { Box, Typography, TextField, Button } from '@mui/material';

function Support() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Support
      </Typography>
      <TextField label="Your Question" fullWidth margin="normal" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default Support;
