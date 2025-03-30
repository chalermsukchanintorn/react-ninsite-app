import React from 'react'
import { Box, Typography, Avatar, Button } from '@mui/material'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'

function HomeUI() {
  return (
    <>
      {/* sx คือ การใช้ css ให้กับ MUI Component */}
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ width: '80%', boxShadow: '2', mx: 'auto', my: 'auto' }}>
          <Avatar src={logo} sx={{mx: 'auto', mt:'20px', width: '150px', height: '150px'}} />
          <Typography variant='h5' sx={{fontWeight: 'bold', color:'#160471', 
                                        textAlign: 'center', mt:'20px'}}>
            ยินดีต้อนรับสู่
          </Typography>
          <Typography sx={{fontSize:'25px', fontWeight:'bold', 
                           textAlign: 'center', color:'#dfac00', 
                           mb:'20px'}}>
            NinniN Site By DTI-SAU
          </Typography>
          <Button component={Link} to='/login' variant='contained' 
                  sx={{mb:'30px', display:'block', mx:'auto',
                       width:'200px', backgroundColor:'#fe00c8', textAlign:'center'}}>
            ไปหน้า Login
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default HomeUI