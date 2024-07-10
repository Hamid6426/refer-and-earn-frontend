import React, { useState } from 'react';
import { Box, Typography, Tab, Tabs, Paper } from '@mui/material';

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="40vh">
      <Box width="100%">
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          {/* Vertical Tabs */}
          <Paper variant="outlined" square style={{ marginRight: '20px', minWidth: '200px' }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={activeTab}
              onChange={handleTabChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="Eligibility" />
              <Tab label="Payment Methods" />
              <Tab label="Refund Policy" />
            </Tabs>
          </Paper>
          {/* View Panel */}
          <Paper variant="outlined" square style={{ flex: 1, overflowY: 'auto', height: '200px', width: '600px' }}>
            {/* Content based on selected tab */}
            {activeTab === 0 && (
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  Who can join these courses?
                </Typography>
                <Typography variant="body1">
                  Our courses are designed for everyone, from beginners to professionals. Whether you are just starting your career or looking to enhance your existing skills, our programs cater to all levels of expertise.
                </Typography>
              </Box>
            )}
            {activeTab === 1 && (
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  What are the payment methods?
                </Typography>
                <Typography variant="body1">
                  We offer a variety of payment methods to make your experience seamless and convenient. You can pay using major credit and debit cards, UPI, net banking, and popular digital wallets like Paytm and Google Pay.
                </Typography>
              </Box>
            )}
            {activeTab === 2 && (
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  What is the refund policy?
                </Typography>
                <Typography variant="body1">
                  We strive to provide the best learning experience for our students. If you are not satisfied with a course, you can request a refund within the first 14 days of enrollment. Please note that refunds are subject to our terms and conditions.
                </Typography>
              </Box>
            )}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Faqs;
