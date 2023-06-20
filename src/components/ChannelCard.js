import React from 'react'
import { Box,CardContent,cardContent,CardMedia,cardMedia,Typography } from '@mui/material'
 import { Link } from 'react-router-dom'
 import { CheckCircle } from '@mui/icons-material'
 import { demoProfilePicture } from '../utils/Constants'

const ChannelCard = ({channelDetail,marginTop}) => {
   console.log(channelDetail)
  return (

     //Display api data in card 
   <Box 
   sx={{boxShadow:"none",
   borderRadius:"20px",
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   width:{md:"320px",xs:"356px"},
   height:"326px",
   margin:"auto",
   marginTop,
  }}
   >
<Link to={`/channel/${channelDetail?.id?.channelId}`}>
  <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",color:"#fff"}}>
  <CardMedia image={channelDetail?.snippet.thumbnails?.high?.url||demoProfilePicture} alt={channelDetail?.snippet?.title}
  sx={{borderRaduis:"50%",height:"180px",width:"180px", mb:2, border:"1px solid #e1e1e1", display:"flex"}}
  />
  <Typography variant='h6' sx={{color:"#fff"}}>
    {channelDetail?.snippet?.title}
<CheckCircle sx={{fontSize:14,color:"gray",ml:"5px"}}/>
  </Typography>
  {channelDetail?.statistics?.subscribercount &&(
    <Typography>
      {parseInt(channelDetail?.statistics?.
      subscribercount).toString()}subscribers
    </Typography>
  )}
  </CardContent>
</Link>

   </Box>
  )
}

export default ChannelCard