import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle as fasUser,
  faHome as fasHome,
  faHeart as fasHeart,
  faComment as fasComment,
} from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  text: string;
  date: string; // or (Date)? idk :D whatever u like
  likes: number;
  comments: number;
};

const Card = (props: Props) => {
  return (
    <div className="card">
      <Link to={"/some-user-profile"} className="profile">
        <FontAwesomeIcon icon={fasUser} />
        <span className="profile-name">{props.name}</span>
      </Link>
      <p className="text">{props.text}</p>
      <div className="post-information">
        <span className="date">{props.date}</span>
        <div className="icons">
          <Link to={"/"}>
            <FontAwesomeIcon icon={fasComment} />
            <span>{props.likes}</span>
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={fasHeart} />
            <span>{props.comments}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
