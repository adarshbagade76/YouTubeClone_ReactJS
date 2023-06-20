import { Box } from '@mui/system'
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed,SearchBar,SliderBar,Videos} from './components'

 


function App() {
  return (
<BrowserRouter>
<Box sx={{backgroundColor:"#000"}}>
<Navbar/>
<Routes>
    <Route path='/' element={<Feed/>}/>
    <Route path='/vedio/:id' element={<VideoDetail/>}/>
    <Route path='/channel/:id' element={<ChannelDetail/>}/>
    <Route path='/search/:searchTerm ' element={<SearchFeed/>}/>
</Routes>
</Box>
</BrowserRouter>
  )
}

export default App