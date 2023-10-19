import React from 'react'
import Panel from './Panel'
import FotoList from './FotoList'
import {GoTrash} from 'react-icons/go'
import { useAddAlbumMutation, useRemoveAlbumMutation, useRemoveUserMutation } from '@/store'
import CircularProgress from '@mui/material/CircularProgress';


const AlbumList = ({album}) => {
    const [removeAlbum  , results]= useRemoveAlbumMutation();
    const handleClick = ()=>{
  
       removeAlbum(album);
 
    }
    const header = (
        <>
        <button className=' me-20 border-none cursor-pointer'  onClick={handleClick}>
         {results.isLoading ? (<CircularProgress style={{width:'20px' , height:'20px' }}/>):  <GoTrash/> }
         
         
        </button>
        {album.title}
        
        </>
    );
  return (
    
    <div>
      <Panel header={header}>
        <FotoList album={album}/>
      </Panel>
    </div>
  )
}

export default AlbumList