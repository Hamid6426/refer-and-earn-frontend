import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const ReferModal = ({ open, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          outline: 'none',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Friend's Name"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Friend's Email"
            type="email"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Your Name"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Your Email"
            type="email"
            variant="outlined"
            required
            sx = {{ marginBottom: 5 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferModal;
