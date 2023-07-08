import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../../../actions/cartAction";
import MyProfile from "./MyProfile";
import { Route, Routes, useParams, NavLink } from "react-router-dom";
import axios from "../../../api/axios";

import useUser from "../../../hooks/useUser";

import Loading from "../Loading";
import UserPosts from "./UserPosts";
import UserComments from "./UserComments";
import UserLikes from "./UserLikes";
type Props = {};

function Profile({}: Props) {
  const { username } = useParams();
  const { data, isPending, error } = useUser({ id: "", username: username });
  return (
    <div className="profile">
      {(isPending || error) && (
        <MyProfile
          data={{
            username: "...",
            fname: "...",
            lname: "...",
            summary: "...",
            id: "0",
            email: "",
            password: "",
          }}
        />
      )}

      {data && (
        <>
          <MyProfile data={data} />

          {/* NavigateLinks (Posts|Comments|Likes) */}
          <div className="user user-navlinks">
            <NavLink to={`/profile/${username}`} end>
              Posts
            </NavLink>
            <NavLink to={`/profile/${username}/comments`}>Comments</NavLink>
            <NavLink to={`/profile/${username}/likes`}>Likes</NavLink>
          </div>

          <Routes>
            <Route path="/" element={<UserPosts user_id={data!.id} />} />
            <Route
              path="/comments"
              element={<UserComments user_id={data!.id} />}
            />
            <Route path="/likes" element={<UserLikes user_id={data!.id} />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default Profile;
