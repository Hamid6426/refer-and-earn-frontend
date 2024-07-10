import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Headline = () => {
  return (
    <Paper elevation={3}
        sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'lightblue',
        }}
        >
      <Typography variant="subtitle1" component="h2" className='inline' paddingX={2} paddingY={1}>
      Navigate your ideal career path with tailored expert advice 
      </Typography>
      <Link href="#" color='primary' variant="subtitle1" underline="none" paddingY={1}>CONTACT EXPERT</Link>
    </Paper>
  );
};

export default Headline;
