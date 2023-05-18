import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../actions/cartAction";
import { useNavigate } from "react-router-dom";

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
        <div className="user-img">user-img</div>
        <div className="user-names">
          <div className="user-real-name">Bla BlaZade</div>
          <div className="username">@ blaBlabla</div>
        </div>
      </div>

      <div className="user-summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eos
        animi! Quos, adipisci explicabo! Facilis rerum minus.
      </div>
    </div>
  );
};

export default MyProfile;
