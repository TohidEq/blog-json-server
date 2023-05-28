import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../../../actions/cartAction";
import MyProfile from "./MyProfile";
import { Route, Routes, useParams, NavLink } from "react-router-dom";

type Props = {};

function Profile({}: Props) {
  const { username } = useParams();
  console.log("username: ", username);
  return (
    <div className="profile">
      <MyProfile />

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
