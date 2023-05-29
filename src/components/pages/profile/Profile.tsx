import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../../../actions/cartAction";
import MyProfile from "./MyProfile";
import { Route, Routes, useParams, NavLink } from "react-router-dom";
import axios from "../../../api/axios"


import useUser from "../../../hooks/useUser";

import Loading from "../Loading"
type Props = {};

function Profile({}: Props) {
  const {username} = useParams();
  const { data, isPending, error  } = useUser({id:"", username:username});
  console.log("username: ", username);

  const res  = axios.get(`/users?username=${username}`)
  console.log("res xx:",data);
  
  return (
    <div className="profile">
      <Loading isPending={isPending} error={error} />
      { data && <MyProfile data={data} />}

      {/* NavigateLinks (Posts|Comments|Likes) */}
      <div className="user user-navlinks">
        <NavLink to={`/profile/${username}`} end>
          Posts
        </NavLink>
        <NavLink to={`/profile/${username}/comments`}>
          Comments
        </NavLink>
        <NavLink to={`/profile/${username}/likes`}>
          Likes
        </NavLink>
      </div>




      <Routes>
        <Route path="/" element={"posts"}/>
        <Route path="/comments" element={"comments"}/>
        <Route path="/likes" element={"likes"}/>
      </Routes>
    </div>
  );
}

export default Profile;
