import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../actions/cartAction";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


import testprofile from '../../../images/profiles/testprofile.jpeg'

type Props = {};

const MyProfile = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOut = () => {
    sessionStorage.clear();
    dispatch(logOut());
    navigate("/sign-in");
  };

  const myredux = useSelector(
    (state: { username: string; id: string; isAuthenticated: boolean }) => state
  );
  return (
    <div className="user">

      <div className="user-basic-data">

        <div className="user-img">
          <img src={testprofile}/>
        </div>
        
        <div className="user-names">
          <div className="user-real-name">{myredux.username}</div>
          <div className="username">@TohidEqqqqqqqq</div>
        </div>

      </div>

      <div className="user-summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eos
      </div>
    </div>
  );
};

export default MyProfile;
