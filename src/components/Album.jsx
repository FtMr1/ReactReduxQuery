import { useAddAlbumMutation,  useFetchAlbumsQuery } from '@/store';
import React  from 'react'
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import { Skeleton } from "@mui/material/";
import AlbumList from './AlbumList';




const Album = ({user}) => {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum , results] = useAddAlbumMutation();


  const handleAlbum = ()=>{
    addAlbum(user)
};
let content;
  if (isFetching) {
    content = <Skeleton variant="rectangular" width="99%" height="200px" />;
  } else if (isError) {
    content = <div>Hata var</div>;
  } else {
    content = data.map((album) => {
      return <AlbumList key={album.id} album={album} />
    });
  };

  return (
    <>
         <div>
         <div className="flex justify-between items-center m-20">
        <h3 >{user.name} Albüm</h3>
        <Button onClick={handleAlbum} variant="outlined">
          
          {results.isLoading ? (<CircularProgress/>): <span>Albüm ekle</span>}
          
          
          
        </Button>
      </div>
    </div>
    <div>
      {content}
    </div>
    </>
   
  )
}

export default Album