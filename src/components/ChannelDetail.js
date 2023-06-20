import { Box } from '@mui/material'
import React from 'react'
import {ChannelCard,Vedios }from './'

import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFormApi } from '../utils/FetchFormApi'



function ChannelDetail() {
  const[channelDetail,setchannelDetail]=useState(null)
  const [Vedios, setVedios] = useState([])

  const {id}= useParams()
   console.log("vedios  and channel of",Vedios,channelDetail,)

useEffect(()=>{ 
  FetchFormApi(`channels?part=snippet&id=${id}`) 
  .then((data)=>setchannelDetail(data?.ems[0]));

    FetchFormApi(`search?channelId=${id}&part=snippet& order=date`) 
  .then((data)=>setVedios(data?.items))
  },[id]);

  return (

 <Box minHeight='95vh'>
  <Box>
    
    <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,73,1) 35%, rgba(0,212,255,1) 100%)',zIndex:10, height:'300px'}}/>
    <ChannelCard channelDetail={channelDetail} marginTop="-130px"/>
    
    {/* <div>{id}</div> */}
  </Box>
  </Box>
  )
}

export default ChannelDetail