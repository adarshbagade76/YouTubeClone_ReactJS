import { Box, Stack } from '@mui/system'
import React from 'react'
import VideoCard from './VideoCard'
 import ChannelCard from './ChannelCard'

const Videos = ({ videos }) => {
  //  console.log("data from Api in Vedio using Props",videos)

  return (
    <div>
      <Stack direction='row' justifyContent='start' flexWrap='wrap' gap={2} display="flex">
        {
          videos.map((item,idx)=>(
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item}/>}
               {item.id.channelId && <ChannelCard channelDetail={item}/>} 

            </Box>

          ))

     
        }
      </Stack>
    </div>
  )
}

export default Videos