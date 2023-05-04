import React from "react";

type Props = {};

function Profile({}: Props) {
  const signOut = () => {
    sessionStorage.clear();
  };
  return (
    <div>
      Profile
      <button onClick={signOut}>(-logout--)</button>
    </div>
  );
}

export default Profile;
