import React,{useEffect, useState} from 'react';
import { Box, Button, TextField, Stack, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize : { lg: '44px', xs: '30px'}}} mb="50px" textAlign="center">
        Awesome Exercices You <br />
        Should Know
      </Typography>
     <Box position="realtive" mb="72px">
     <TextField
     sx={{
      input: {
        fontWeight : '700',
        border: 'none',
        borderRadius: '4px'
      },
      width: { lg: '1170px', xs: '350px'},
      backgroundColor: '#fff',
      borderRadius: '40px'
     }}
     height="76px"
     value=""
     onChange={(e) => {}}
     placeholder="Search Excercises"
     type="text"
     />
 <Button className='search-btn' 
 sx={{
  bgcolor: '#FF2625',
  color: '#fff',
  textTransform: 'none'
 }}
 >Search</Button>
     </Box>
    </Stack>
  )
}

export default SearchExercises