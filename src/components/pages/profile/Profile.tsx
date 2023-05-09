import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../../../actions/cartAction";

type Props = {};

function Profile({}: Props) {
  const signOut = () => {
    sessionStorage.clear();
    dispatch(logOut());
  };
  const myredux = useSelector(
    (state: { id: string; isAuthenticated: boolean }) => state
  );

  const dispatch = useDispatch();
  return (
    <div>
      Profile
      <button onClick={signOut}>(-logout--)</button>
      <div
        onClick={() => {
          console.log("clicked");
          dispatch({ ...logIn(), payload: { id: "123431" } });
        }}
      >
        your redux:{myredux.id} and {myredux.isAuthenticated}
      </div>
    </div>
  );
}

export default Profile;
