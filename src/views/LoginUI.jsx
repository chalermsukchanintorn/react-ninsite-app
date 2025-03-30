import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, TextField } from '@mui/material'
import { FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material'
import { Stack } from '@mui/material'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { Link } from 'react-router-dom';
import logo from './../assets/logo.png'

function LoginUI() {
  return (
    <>
      <AppBar sx={{ backgroundColor: '#049156' }} position="static">
        <Toolbar>
          <Link to='/'>
            <FlutterDashIcon sx={{ color: 'yellow', fontSize: '30px' }} />
          </Link>
          <Typography sx={{ ml: '10px', flexGrow: 1 }}>
            NinniN Site by DTI-SAU
          </Typography>
          <Typography sx={{ mr: '10px', textDecoration: 'none', color: 'white' }} component={Link} to='/login'>
            Login
          </Typography>
          <Typography sx={{ mr: '10px', textDecoration: 'none', color: 'white' }} component={Link} to='/contact'>
            Contact
          </Typography>
          <Typography sx={{ textDecoration: 'none', color: 'white' }} component={Link} to='/about/ninnin'>
            About
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: '70%', mx: 'auto', mt: '100px', boxShadow: '2', px: '40px', pb: '40px' }}>
        <Avatar src={logo} sx={{ mx: 'auto', mt: '20px', width: '100px', height: '100px' }} />
        <Typography sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
          เข้าใช้งานระบบ
        </Typography>
        <Typography sx={{ fontSize: '16px', mt: '20px' }}>
          ชื่อผู้ใช้
        </Typography>
        <TextField size='small' fullWidth />
        <Typography sx={{ fontSize: '16px', mt: '20px' }}>
          รหัสผ่าน
        </Typography>
        <TextField size='small' fullWidth type='password' />
        <FormControl sx={{ display: 'block', mt: '20px' }}>
          <RadioGroup row sx={{ display: 'flex', justifyContent: 'center' }}>
            <FormControlLabel value="สมาชิกทั่วไป" control={<Radio />} label="สมาชิกทั่วไป" />
            <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
          </RadioGroup>
        </FormControl>
        <Button variant='contained' fullWidth sx={{ my: '20px', backgroundColor: '#049156' }}>
          Login
        </Button>
        <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'center'}}>
          <Typography sx={{ fontSize: '16px'}}>
            ยังไม่มีบัญชี?
          </Typography>
          <Typography sx={{ fontSize: '16px', ml: 1, color:'red'}}>
            ลงทะเบียน
          </Typography>
        </Stack>
      </Box>
    </>
  )
}

export default LoginUI
