import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Divider,
  Container
} from '@mui/material';
import {
  ExpandMore,
  Face,
  Accessible,
  DirectionsWalk,
  PhotoCamera,
  Height,
  FitnessCenter
} from '@mui/icons-material';

interface AvatarMeasurements {
  // Basic Info
  fullName: string;
  age: string;
  gender: string;
  
  // Face Measurements
  faceShape: string;
  faceWidth: string;
  faceLength: string;
  jawWidth: string;
  cheekboneWidth: string;
  foreheadWidth: string;
  noseWidth: string;
  noseLength: string;
  lipWidth: string;
  lipThickness: string;
  eyeSpacing: string;
  eyeSize: string;
  eyebrowThickness: string;
  eyebrowShape: string;
  
  // Upper Body Measurements
  shoulderWidth: string;
  chestWidth: string;
  chestDepth: string;
  waistWidth: string;
  waistDepth: string;
  backWidth: string;
  armLength: string;
  upperArmCircumference: string;
  forearmCircumference: string;
  wristCircumference: string;
  neckCircumference: string;
  
  // Lower Body Measurements
  hipWidth: string;
  hipDepth: string;
  thighCircumference: string;
  quadCircumference: string;
  calfCircumference: string;
  ankleCircumference: string;
  inseamLength: string;
  outseamLength: string;
  
  // Overall Body
  height: string;
  weight: string;
  bodyType: string;
  skinTone: string;
}

const AvatarCreation = () => {
  const [measurements, setMeasurements] = useState<AvatarMeasurements>({
    // Basic Info
    fullName: '',
    age: '',
    gender: '',
    
    // Face Measurements
    faceShape: '',
    faceWidth: '',
    faceLength: '',
    jawWidth: '',
    cheekboneWidth: '',
    foreheadWidth: '',
    noseWidth: '',
    noseLength: '',
    lipWidth: '',
    lipThickness: '',
    eyeSpacing: '',
    eyeSize: '',
    eyebrowThickness: '',
    eyebrowShape: '',
    
    // Upper Body Measurements
    shoulderWidth: '',
    chestWidth: '',
    chestDepth: '',
    waistWidth: '',
    waistDepth: '',
    backWidth: '',
    armLength: '',
    upperArmCircumference: '',
    forearmCircumference: '',
    wristCircumference: '',
    neckCircumference: '',
    
    // Lower Body Measurements
    hipWidth: '',
    hipDepth: '',
    thighCircumference: '',
    quadCircumference: '',
    calfCircumference: '',
    ankleCircumference: '',
    inseamLength: '',
    outseamLength: '',
    
    // Overall Body
    height: '',
    weight: '',
    bodyType: '',
    skinTone: ''
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const handleInputChange = (field: keyof AvatarMeasurements) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: string } }
  ) => {
    setMeasurements(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPhotoFile(event.target.files[0]);
    }
  };

  const handleGenerateAvatar = () => {
    console.log('Generating avatar with measurements:', measurements);
    console.log('Photo file:', photoFile);
    // Here you would typically send data to your backend
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box className="animate-fadeInUp">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
              mb: 2
            }}
          >
            Create Your Perfect Avatar
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Provide detailed measurements for an exact replica of your body
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Column - Form */}
          <Grid item xs={12} lg={8}>
            {/* Basic Information */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhotoCamera color="primary" />
                  Basic Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={measurements.fullName}
                      onChange={handleInputChange('fullName')}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Age"
                      type="number"
                      value={measurements.age}
                      onChange={handleInputChange('age')}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        value={measurements.gender}
                        label="Gender"
                        onChange={handleInputChange('gender')}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Upload Full Body Photo"
                      type="file"
                      inputProps={{ 
                        accept: 'image/*',
                        style: {
                          fontFamily: 'inherit',
                          fontSize: 'inherit'
                        }
                      }}
                      onChange={handlePhotoUpload}
                      helperText="Upload a clear front-facing photo for best results"
                      sx={{
                        '& .MuiInputBase-input': {
                          fontFamily: 'inherit',
                          fontSize: 'inherit'
                        }
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Face Section */}
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Face color="primary" />
                  Face Measurements
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Face Shape</InputLabel>
                      <Select
                        value={measurements.faceShape}
                        label="Face Shape"
                        onChange={handleInputChange('faceShape')}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="oval">Oval</MenuItem>
                        <MenuItem value="round">Round</MenuItem>
                        <MenuItem value="square">Square</MenuItem>
                        <MenuItem value="heart">Heart</MenuItem>
                        <MenuItem value="diamond">Diamond</MenuItem>
                        <MenuItem value="oblong">Oblong</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Face Width (cm)"
                      type="number"
                      value={measurements.faceWidth}
                      onChange={handleInputChange('faceWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Face Length (cm)"
                      type="number"
                      value={measurements.faceLength}
                      onChange={handleInputChange('faceLength')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Jaw Width (cm)"
                      type="number"
                      value={measurements.jawWidth}
                      onChange={handleInputChange('jawWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Cheekbone Width (cm)"
                      type="number"
                      value={measurements.cheekboneWidth}
                      onChange={handleInputChange('cheekboneWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Forehead Width (cm)"
                      type="number"
                      value={measurements.foreheadWidth}
                      onChange={handleInputChange('foreheadWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Nose Width (cm)"
                      type="number"
                      value={measurements.noseWidth}
                      onChange={handleInputChange('noseWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Nose Length (cm)"
                      type="number"
                      value={measurements.noseLength}
                      onChange={handleInputChange('noseLength')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Lip Width (cm)"
                      type="number"
                      value={measurements.lipWidth}
                      onChange={handleInputChange('lipWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Lip Thickness (cm)"
                      type="number"
                      value={measurements.lipThickness}
                      onChange={handleInputChange('lipThickness')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Eye Spacing (cm)"
                      type="number"
                      value={measurements.eyeSpacing}
                      onChange={handleInputChange('eyeSpacing')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Eye Size (cm)"
                      type="number"
                      value={measurements.eyeSize}
                      onChange={handleInputChange('eyeSize')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Eyebrow Thickness</InputLabel>
                      <Select
                        value={measurements.eyebrowThickness}
                        label="Eyebrow Thickness"
                        onChange={handleInputChange('eyebrowThickness')}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="thin">Thin</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="thick">Thick</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Eyebrow Shape</InputLabel>
                      <Select
                        value={measurements.eyebrowShape}
                        label="Eyebrow Shape"
                        onChange={handleInputChange('eyebrowShape')}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="straight">Straight</MenuItem>
                        <MenuItem value="arched">Arched</MenuItem>
                        <MenuItem value="angled">Angled</MenuItem>
                        <MenuItem value="rounded">Rounded</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* Upper Body Section */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Accessible color="primary" />
                  Upper Body Measurements
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Shoulder Width (cm)"
                      type="number"
                      value={measurements.shoulderWidth}
                      onChange={handleInputChange('shoulderWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Chest Width (cm)"
                      type="number"
                      value={measurements.chestWidth}
                      onChange={handleInputChange('chestWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Chest Depth (cm)"
                      type="number"
                      value={measurements.chestDepth}
                      onChange={handleInputChange('chestDepth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Waist Width (cm)"
                      type="number"
                      value={measurements.waistWidth}
                      onChange={handleInputChange('waistWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Waist Depth (cm)"
                      type="number"
                      value={measurements.waistDepth}
                      onChange={handleInputChange('waistDepth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Back Width (cm)"
                      type="number"
                      value={measurements.backWidth}
                      onChange={handleInputChange('backWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Arm Length (cm)"
                      type="number"
                      value={measurements.armLength}
                      onChange={handleInputChange('armLength')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Upper Arm Circumference (cm)"
                      type="number"
                      value={measurements.upperArmCircumference}
                      onChange={handleInputChange('upperArmCircumference')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Forearm Circumference (cm)"
                      type="number"
                      value={measurements.forearmCircumference}
                      onChange={handleInputChange('forearmCircumference')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Wrist Circumference (cm)"
                      type="number"
                      value={measurements.wristCircumference}
                      onChange={handleInputChange('wristCircumference')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Neck Circumference (cm)"
                      type="number"
                      value={measurements.neckCircumference}
                      onChange={handleInputChange('neckCircumference')}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* Lower Body Section */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <DirectionsWalk color="primary" />
                  Lower Body Measurements
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Hip Width (cm)"
                      type="number"
                      value={measurements.hipWidth}
                      onChange={handleInputChange('hipWidth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Hip Depth (cm)"
                      type="number"
                      value={measurements.hipDepth}
                      onChange={handleInputChange('hipDepth')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Thigh Circumference (cm)"
                      type="number"
                      value={measurements.thighCircumference}
                      onChange={handleInputChange('thighCircumference')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Quad Circumference (cm)"
                      type="number"
                      value={measurements.quadCircumference}
                      onChange={handleInputChange('quadCircumference')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Calf Circumference (cm)"
                      type="number"
                      value={measurements.calfCircumference}
                      onChange={handleInputChange('calfCircumference')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Ankle Circumference (cm)"
                      type="number"
                      value={measurements.ankleCircumference}
                      onChange={handleInputChange('ankleCircumference')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Inseam Length (cm)"
                      type="number"
                      value={measurements.inseamLength}
                      onChange={handleInputChange('inseamLength')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Outseam Length (cm)"
                      type="number"
                      value={measurements.outseamLength}
                      onChange={handleInputChange('outseamLength')}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* Overall Body */}
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Height color="primary" />
                  Overall Body
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      fullWidth
                      label="Height (cm)"
                      type="number"
                      value={measurements.height}
                      onChange={handleInputChange('height')}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      fullWidth
                      label="Weight (kg)"
                      type="number"
                      value={measurements.weight}
                      onChange={handleInputChange('weight')}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FormControl fullWidth>
                      <InputLabel>Body Type</InputLabel>
                      <Select
                        value={measurements.bodyType}
                        label="Body Type"
                        onChange={handleInputChange('bodyType')}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="ectomorph">Ectomorph (Slim)</MenuItem>
                        <MenuItem value="mesomorph">Mesomorph (Athletic)</MenuItem>
                        <MenuItem value="endomorph">Endomorph (Heavy)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FormControl fullWidth>
                      <InputLabel>Skin Tone</InputLabel>
                      <Select
                        value={measurements.skinTone}
                        label="Skin Tone"
                        onChange={handleInputChange('skinTone')}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="very_fair">Very Fair</MenuItem>
                        <MenuItem value="fair">Fair</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="olive">Olive</MenuItem>
                        <MenuItem value="brown">Brown</MenuItem>
                        <MenuItem value="dark">Dark</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Preview & Actions */}
          <Grid item xs={12} lg={4}>
            {/* Avatar Preview */}
            <Card sx={{ mb: 3, position: 'sticky', top: 20 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Avatar Preview
                </Typography>
                <Paper
                  sx={{
                    height: 300,
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    mb: 3
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <FitnessCenter sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="body2" color="text.secondary">
                      Avatar will appear here
                    </Typography>
                  </Box>
                </Paper>

                <Divider sx={{ my: 2 }} />

                {/* Progress Indicator */}
                <Typography variant="h6" gutterBottom>
                  Completion Progress
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Basic Info: {measurements.fullName ? '✅' : '⭕'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Face Details: {measurements.faceShape ? '✅' : '⭕'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Upper Body: {measurements.shoulderWidth ? '✅' : '⭕'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Lower Body: {measurements.hipWidth ? '✅' : '⭕'}
                  </Typography>
                </Box>

                {/* Generate Button */}
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleGenerateAvatar}
                  sx={{
                    background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                    },
                    py: 1.5
                  }}
                >
                  Generate Avatar
                </Button>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                  AI will process your measurements and create a perfect 3D avatar
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AvatarCreation;
