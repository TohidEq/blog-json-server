import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaComment, FaHeart } from "react-icons/fa";
import useUser from "../../hooks/useUser";

type Props = {
  data: IBlog;
};

const Card = (props: Props) => {
  const {
    data: userData,
    error: userError,
    isPending: userIsPending,
  } = useUser({ id: props.data.user_id, username: "" });

  const date = new Date(props.data.created_at);

  return (
    <div className="card">
      <Link to={"/some-user-profile"} className="profile">
        <FaUser className="border-[1px] sm:border-2" />
        <span className="profile-name">
          {userData?.username}
          {userIsPending && "..."}
        </span>
      </Link>
      <p className="text">{props.data.text}</p>
      <div className="post-information">
        <span className="date">
          {date.getMonth().toString() +
            "/" +
            date.getDate().toString() +
            "  " +
            date.getHours() +
            ":" +
            date.getMinutes()}
        </span>
        <div className="icons">
          <Link to={"/"}>
            <span>11</span>
            {/* <span>{props.likes}</span> */}
            <FaComment />
          </Link>
          <Link to={"/"}>
            <span>11</span>
            {/* <span>{props.comments}</span> */}
            <FaHeart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
