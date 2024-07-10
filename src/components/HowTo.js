import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import image from '../assets/HowTo.png';

const HowTo = ({ buttonText, onButtonClick }) => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="h2" paddingX={1} paddingY={2} >
          How Do I
        </Typography>
        <Link href="#" color="primary" variant="h4" underline="none" paddingX={0} paddingY={2}>
          Refer?
        </Link>
      </Paper>
    
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          image={image}
          alt="How To"
          sx={{ width: '140%', height: 'auto', objectFit: 'cover', marginBottom: '20px' }}
        />
        <Button variant="contained" onClick={onButtonClick}
        sx={{ width: '40%', height: 'auto', objectFit: 'cover', 
          marginBottom: '60px', fontSize: 24, fontWeight:600, }}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default HowTo;
