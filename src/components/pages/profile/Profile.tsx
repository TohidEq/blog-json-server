import { useSignOut } from "@nhost/react";
import React from "react";

type Props = {};

function Profile({}: Props) {
  const { signOut } = useSignOut();
  return (
    <div>
      Profile
      <button onClick={signOut}>(-logout--)</button>
    </div>
  );
}

export default Profile;
