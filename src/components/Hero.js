import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import image from '../assets/HeroImage.png';

const Hero = ({ buttonText, onButtonClick }) => {
  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={image}
        alt="Hero Image"
        sx={{ width: '85%', height: 'auto', objectFit: 'cover', }}
      />
      <Button
        variant="contained"
        sx={{ width: '40%', height: 'auto', objectFit: 'cover', 
              marginBottom: '60px', fontSize: 24, fontWeight:600, }}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Hero;
