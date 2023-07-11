import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  data: IUser;
};

const UserCard = (props: Props) => {
  return (
    <div className="card">
      <Link to={`/profile/${props.data.username}`} className="profile">
        <FaUser className="border-[1px] sm:border-2" />
        <span className="profile-name">{props.data.username}</span>
      </Link>
      <p className="text">
        {props.data.summary !== "" ? props.data.summary : "nothing yet"}
      </p>
    </div>
  );
};

export default UserCard;
