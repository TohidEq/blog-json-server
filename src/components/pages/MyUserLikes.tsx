import React from "react";
import useAuth from "../../hooks/useAuth";
import UserLikes from "./profile/UserLikes";

type Props = {};

const MyUserLikes = (props: Props) => {
  const { isAuthenticated, id: myUserId } = useAuth();
  return (
    <>
      <div className="page py-4">
        <h2 className=" text-center">My Likes</h2>
      </div>
      <UserLikes user_id={myUserId} />
    </>
  );
};

export default MyUserLikes;
