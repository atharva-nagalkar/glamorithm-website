import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

function AvatarGallery() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Avatar Gallery
      </Typography>
      <List>
        {['Avatar 1', 'Avatar 2', 'Avatar 3'].map((text, index) => (
          <ListItem key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default AvatarGallery;
