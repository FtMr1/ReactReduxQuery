import { useRemovePhotoMutation } from '@/store';
import React from 'react'
import {GoTrash} from 'react-icons/go'

import CircularProgress from '@mui/material/CircularProgress';


const FotoListItem = ({photo}) => {
  const [removePhoto  , results]= useRemovePhotoMutation();
  const handleRemovePhoto = ()=>{

     removePhoto(photo);

  }
  return (
    <div className=' relative m-6 cursor-pointer' onClick={handleRemovePhoto}>
     
     <img src={photo.url} width={150} height={200} alt="" />
     <div className=' absolute top-[45px] translate-x-1 translate-y-1 left-[60px] text-red-500'>
     {results.isLoading ? (<CircularProgress style={{width:'20px' , height:'20px' }}/>):  <GoTrash/> }
     </div>
    
   
     
    </div>
  )
}

export default FotoListItem