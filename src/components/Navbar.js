import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from '../utils/Constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
<Stack direction='row'alignItems='center'p={1.3}
sx={{backgroundColor:'#fff',
 position:"sticky",
  top:"0",
  justifyContent:"space-between"}} >

    <Link to='/' style={{display:"flex",alignItem:"center"}}>
      <img src={logo} alt='logo'height={45}/>
    </Link> 
    <SearchBar/>

</Stack>
  )
}

export default Navbar
