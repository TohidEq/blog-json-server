import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../../../actions/cartAction";
import MyProfile from "./MyProfile";

type Props = {};

function Profile({}: Props) {

  return (
    <div className="profile">
      <MyProfile />
      {/* Posts | Comments | Likes  */}
    </div>
  );
}

export default Profile;
