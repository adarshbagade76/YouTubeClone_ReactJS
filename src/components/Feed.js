import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, {useState, useEffect } from 'react'
import { SlideBar, Videos } from '../components'
import { FetchFormApi } from '../utils/FetchFormApi'


const Feed = () => {
  const [selectedcategory, setSelectedcategory] = useState('New')
  const [videos,setVedios]=useState([])

useEffect(()=>{
 FetchFormApi(`search?part=snippet&q=${selectedcategory}`) 
 .then((data)=>setVedios(data.items))
 },[selectedcategory])
// console.log("data of",videos)


// console.log(selectedcategory)
  return (
    //flexDirection:{sx:"column",md:"row"} for  responsive
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} >
      <Box sx={{ height: { sx: "auto", md: '101vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SlideBar
        selectedcategory={selectedcategory}
        setSelectedcategory={setSelectedcategory}
        />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2022 JSM Medio
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h5' fontWeight='blod' mb={2} sx={{ color: "white" }} >
          {selectedcategory}<span style={{ color: '#F31503' }}>  Vedios</span>
        </Typography>
        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed