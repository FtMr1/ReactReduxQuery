import React from "react";
import { useFetchUserQuery } from "@/store";
import { Skeleton } from "@mui/material/";
import UserListItem from "./UserListItem";
import Button from "@mui/material/Button";
import { useAddUserMutation } from "@/store";
import CircularProgress from '@mui/material/CircularProgress';






const UserList = () => {
  const { data, isError, isFetching } = useFetchUserQuery();
  const [addUser , results] = useAddUserMutation();
  let content;
  if (isFetching) {
    content = <Skeleton variant="rectangular" width="99%" height="600px" />;
  } else if (isError) {
    content = <div>Hata var</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }
  const handleUser = ()=>{
        addUser()
  }
  return (
    <div>
      <div className="flex justify-between items-center m-20">
        <h1 className=" font-semibold">Kişiler</h1>
        <Button onClick={handleUser} variant="outlined">
          
          {results.isLoading ? (<CircularProgress/>): <span>Kişi Ekle</span>}
          
          
          
        </Button>
      </div>

      {content}
    </div>
  );
};

export default UserList;
