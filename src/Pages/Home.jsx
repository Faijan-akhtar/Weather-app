import React, { useState } from 'react'
import {Box,styled} from '@mui/material'
import sunset from '../assets/Image/pic.jpg'

import Form from '../Components/Form'

const Componet=styled(Box)({
    height:'100vh',
    display:'flex',
    
    margin:'0 auto',
     width:'80%'

})
const Image=styled(Box)({
    backgroundImage:`url(${sunset})`,
  
    width:'20%',
    height:'80%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px',
    
})
const Home = () => {
 
 
  return (
    <>

    <Componet>
   < Image></Image>
        <Box styled={{width:"80%",height:'80%'}}>
            <Form />
            {/* <Information/> */}
        </Box>
    </Componet>
    </>
  )
}

export default Home
