import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../../../actions/cartAction";
import MyProfile from "./MyProfile";
import { Route, Routes, useParams } from "react-router-dom";

type Props = {};

function Profile({}: Props) {
  const { username } = useParams();
  console.log("username: ", username);
  return (
    <div className="profile">
      <MyProfile />
      {/* NavigateLinks ( Posts | Comments | Likes ) */}
      <Routes>
        <Route path="/x" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default Profile;
