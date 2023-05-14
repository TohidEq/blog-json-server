import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaComment, FaHeart } from "react-icons/fa";
import useUser from "../../hooks/useUser";

type Props = {
  name: string;
  text: string;
  date: string; // or (Date)? idk :D whatever u like
  likes: number;
  comments: number;
};

const Card = (props: Props) => {
  const {
    data: userData,
    error: userError,
    isPending: userIsPending,
  } = useUser({ id: props.name });

  const date = new Date(props.date);
  return (
    <div className="card">
      <Link to={"/some-user-profile"} className="profile">
        <FaUser className="border-[1px] sm:border-2" />
        <span className="profile-name">{userData?.username}</span>
      </Link>
      <p className="text">{props.text}</p>
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
            <span>{props.likes}</span>
            <FaComment />
          </Link>
          <Link to={"/"}>
            <span>{props.comments}</span>
            <FaHeart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
