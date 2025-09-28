import { Box, Typography, TextField, Button } from '@mui/material';

function AvatarCreation() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Avatar Creation
      </Typography>
      <TextField label="Full Body Photo" fullWidth margin="normal" />
      <TextField label="Height" fullWidth margin="normal" />
      <TextField label="Weight" fullWidth margin="normal" />
      <Button variant="contained" color="primary">
        Generate Avatar
      </Button>
    </Box>
  );
}

export default AvatarCreation;
