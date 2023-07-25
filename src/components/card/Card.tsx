import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaComment, FaHeart } from "react-icons/fa";
import useUser from "../../hooks/useUser";
import LikeCommentCounter from "./LikesAndCommentsCounter/LikeCommentCounter";
import useAuth from "../../hooks/useAuth";

type Props = {
  data: IBlog;
};

const Card = (props: Props) => {
  const {
    data: userData,
    error: userError,
    isPending: userIsPending,
  } = useUser({ id: props.data.user_id, username: "" });

  const { isAuthenticated, id, username } = useAuth();

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
        <LikeCommentCounter blog_id={props.data.id} />
      </div>
      {isAuthenticated && props.data.user_id === id && (
        <div className="post-information">
          <Link to={`delete/blog/${props.data.id}`} className="delete-item">
            Delete
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
