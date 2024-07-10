import React, { useState } from 'react';
import { Button, Tabs, Tab, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Link } from '@mui/material';
import allProgramsData from './data/allPrograms';
import fintechData from './data/fintechData';
import digitalMarketingData from './data/digitalMarketing';
import machineLearningData from './data/machineLearning';
import webDevelopmentData from './data/webDevelopment';
import dataScienceData from './data/dataScience';
import graphicDesignData from './data/graphicDesign';
import uxuiDesignData from './data/uxuiDesign';
import blockChainData from './data/blockChain';
import cyberSecurityData from './data/cyberSecurity';

const Benefits = ({ buttonText, onButtonClick }) => {
  
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const courseNames = [
    'All Programs',
    'Fintech',
    'Machine Learning',
    'Digital Marketing',
    'Web Development',
    'Data Science',
    'Graphic Design',
    'UX/UI Design',
    'Blockchain',
    'Cybersecurity',
  ];

  const getProgramData = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return allProgramsData; // All Programs
      case 1:
        return fintechData; // Fintech
      case 2:
        return machineLearningData; // Machine Learning
      case 3:
        return digitalMarketingData; // Digital Marketing
      case 4:
        return webDevelopmentData; // Web Development
      case 5:
        return dataScienceData; // Data Science
      case 6:
        return graphicDesignData; // Graphic Design
      case 7:
        return uxuiDesignData; // UX/UI Design
      case 8:
        return blockChainData; // Blockchain
      case 9:
        return cyberSecurityData; // Cybersecurity
      default:
        return allProgramsData; // Default to All Programs
    }
  };

  const dataToDisplay = getProgramData(selectedTab);

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
          What are the
        </Typography>
        <Link href="#" color="primary" variant="h4" underline="none" paddingX={0} paddingY={2}>
          Referral Benefits?
        </Link>
      </Paper>

      <Box sx={{ display: 'flex', height: 'fit-content' }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 3, borderColor: 'divider' }}
        >
          {courseNames.map((course, index) => (
            <Tab key={index} label={course} />
          ))}
        </Tabs>
        <Box sx={{ flexGrow: 1, paddingX: 1.5 }}>
          <TableContainer component={Paper}>
            <Table aria-label="courses table">
              <TableHead>
                <TableRow>
                  <TableCell>Programs</TableCell>
                  <TableCell align="right">Referrer Bonus</TableCell>
                  <TableCell align="right">Referee Bonus</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataToDisplay.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.program}
                    </TableCell>
                    <TableCell align="right">{row.referrerBonus}</TableCell>
                    <TableCell align="right">{row.refereeBonus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Button
          variant="contained"
          sx={{
            width: '40%', height: 'auto', objectFit: 'cover', marginTop: '40px',
            marginBottom: '60px', fontSize: 24, fontWeight: 600,
          }}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default Benefits;
