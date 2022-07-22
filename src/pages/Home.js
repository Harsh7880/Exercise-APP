import React,{ useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Excersices from '../components/Exercises';


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Excersices />
    </Box>
  )
}

export default Home