import { Category } from '@mui/icons-material'
import { Stack } from '@mui/system'
import React from 'react'
import { categories } from '../utils/Constants'
import  FetchFormApi  from '../utils/FetchFormApi'


const SlideBar = ({selectedcategory,setSelectedcategory}) => {
  return (
    <Stack direction="row" sx={{
      overflowY:"auto",
      height:{md:"95%", sx:"auto"},
      flexDirection:{md:"column",sx:"row"}
      }}
    >
      {/* map method to display elememts */}
     {
    
        categories.map((category)=>(
            <button className='category-btn'  
           onClick={()=>setSelectedcategory(category.name)}
            style={{
                background:category.name === selectedcategory && '#FC1503',color:"white"}}
                 key={category.name}
            >
              
               <span style={{color:category.name === selectedcategory ? 'white':'red',marginRight:'15px'}}>{category.icon}</span> 
               <span style={{opacity:category.name ===selectedcategory ? '1':'0.8' }}>{category.name}</span> 
             </button>
        ))
     }
    </Stack>
  )
}

export default SlideBar