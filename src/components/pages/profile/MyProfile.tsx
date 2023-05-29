import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../actions/cartAction";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import useAuth from "../../../hooks/useAuth";

import IUser from "../../../models/IUsers"

import testprofile from '../../../images/profiles/testprofile.jpeg'

type Props = {
         data: IUser
         };

const MyProfile = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {id, fname, lname, summary, username} = props.data

  console.log("gololo",id,username,fname,lname,summary);
  

  const signOut = () => {
    sessionStorage.clear();
    dispatch(logOut());
    navigate("/sign-in");
  };

   
  
  const { isAuthenticated, username:myUsername } = useAuth();

  return ( <div className="user">

      <div className="user-basic-data">

        <div className="user-img">
          <img src={testprofile}/>
        </div>
        
        <div className="user-names">
          <div className="user-real-name">{`${fname} ${lname}`}</div>
          <div className="username">@{username}</div>
        </div>

      </div>

      <div className="user-summary">
        {summary!==""? summary:"Nothing yet :D"} 

      </div>  
    </div>
  );
};

export default MyProfile;
