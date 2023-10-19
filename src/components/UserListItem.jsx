import React from 'react'
import Panel from './Panel'
import Album from './Album'
import {GoTrash} from 'react-icons/go'
import { useRemoveUserMutation } from '@/store'
import CircularProgress from '@mui/material/CircularProgress';

const UserListItem = ({user}) => {
  const [removeUser  , results]= useRemoveUserMutation();
   const handleClick = ()=>{
      removeUser(user);

   }

  const header = (
    <>
    <button className=' me-20 border-none cursor-pointer'  onClick={handleClick}>
     {results.isLoading ? (<CircularProgress style={{width:'20px' , height:'20px' }}/>):  <GoTrash/> }
     
     
    </button>
    {user.name}
    
    </>
  )
  return (
    <div>
      <Panel header={header}>
        <Album user={user}/>
      </Panel>
    </div>
  )
}

export default UserListItem