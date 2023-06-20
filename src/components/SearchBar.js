import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper
     component='form'
    onSubmit={()=>{}}
    sx={{
        border:" solid #e3e3e3",
       borderRadius:'19px',
        pl:"2",
        boxShadow:'none',
       mr:{sm:5}
      }}
     >
      <input className='search-bar'  placeholder='Search...' value='' onChange={()=>{}}/>
      <IconButton sx={{p:"6px",color:"red"}}>
       <Search/>
      </IconButton> 
   
       
    </Paper>

  )
}

export default SearchBar