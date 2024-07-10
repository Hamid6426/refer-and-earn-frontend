import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box } from '@mui/material';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const BasicTabs = ({ onTabChange }) => {
  const handleChange = (event, newValue) => {
    onTabChange(newValue);
    const section = document.getElementById(`tab-section-${newValue}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%', marginTop: '2%'}}>
      <Box sx={{ border: 2, borderColor: 'divider', borderRadius: 15, backgroundColor: 'lightblue', marginTop: 1 }}>
        <Tabs
          value={false} // Remove active tab state
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab
            label={<span style={{ fontSize: 20 }}>Refers</span>}
            {...a11yProps(0)}
            sx={{ mr: 2 }} // Add margin-right for spacing
          />
          <Tab
            label={<span style={{ fontSize: 20 }}>Benefits</span>}
            {...a11yProps(1)}
            sx={{ mr: 2 }} // Add margin-right for spacing
          />
          <Tab
            label={<span style={{ fontSize: 20 }}>FAQs</span>}
            {...a11yProps(2)}
            sx={{ mr: 2 }} // Add margin-right for spacing
          />
        </Tabs>
      </Box>
    </Box>
  );
};

BasicTabs.propTypes = {
  onTabChange: PropTypes.func.isRequired,
};

export default BasicTabs;
