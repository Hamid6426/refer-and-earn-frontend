import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Headline from './components/Headline';
import Header from './components/Header';
import BasicTabs from './components/Tabs';
import Hero from './components/Hero';
import HowTo from './components/HowTo';
import Benefits from './components/Benefits';
import Faqs from './components/Faqs';
import ReferModal from './components/ReferModel';


const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <Headline />
      <Header />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <BasicTabs onTabChange={() => {}} />
          <div id="tab-section-0"></div>
          <Hero buttonText="Refer Now" onButtonClick={handleModalOpen} />
          <HowTo buttonText="Refer Now" onButtonClick={handleModalOpen} />
          <div id="tab-section-1"></div>
          <Benefits buttonText="Refer Now" onButtonClick={handleModalOpen} />
          <div id="tab-section-2"></div>
          <Faqs />
          <div id="tab-section-3"></div>
        </Grid>
      </Grid>
      <ReferModal open={modalOpen} handleClose={handleModalClose} />
    </div>
  );
};

export default App;
