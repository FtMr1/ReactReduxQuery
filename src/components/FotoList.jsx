"use client "
import { useAddPhotoMutation, useFetchPhotosQuery } from '@/store';
import React from 'react'
import FotoListItem from './FotoListItem';
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import { Skeleton } from "@mui/material/";
import AlbumList from './AlbumList';



const FotoList = ({album}) => {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto , results] = useAddPhotoMutation();


  const handleFotoAdd = ()=>{
    addPhoto(album)
};
let content;
  if (isFetching) {
    content = <Skeleton variant="rectangular" width="99%" height="200px" />;
  } else if (isError) {
    content = <div>Hata var</div>;
  } else {
    content = data.map((photo , index) => {
      return <FotoListItem key={index} photo={photo} />
    });
  };
  return (
    <>
         <div>
         <div className="flex justify-between items-center m-20">
        <h3 >{album.title} Fotoları</h3>
        <Button onClick={handleFotoAdd} variant="outlined">
          
          {results.isLoading ? (<CircularProgress/>): <span>Foto ekle</span>}
          
          
          
        </Button>
      </div>
    </div>
    <div className='flex flex-wrap justify-center items-center m-6'>
      {content}
    </div>
    </>
  )
}

export default FotoList