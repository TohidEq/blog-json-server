import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaComment, FaHeart } from "react-icons/fa";
import useUser from "../../hooks/useUser";
import { nanoid } from "nanoid";
import useAuth from "../../hooks/useAuth";

type Props = {
  data: IComment;
};

const CommentCard = (props: Props) => {
  const { isAuthenticated, id, username } = useAuth();

  if (props.data.id === "no user") {
    const date = new Date("1688855129323");
    return (
      <>
        {"123456".split("").map(() => (
          <div className="card" key={nanoid()}>
            <Link to={"/#"} className="profile">
              <FaUser className="border-[1px] sm:border-2" />
              <span className="profile-name">. . .</span>
            </Link>
            <p className="text">.. .. .. ..</p>
            <div className="post-information">
              <span className="date">../.. ..:..</span>
              <div className="icons">
                {/* <Link to={"#"}>
                  <span>..</span>
                  <FaComment />
                </Link>
                <Link to={"#"}>
                  <span>..</span>
                  <FaHeart />
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  const {
    data: userData,
    error: userError,
    isPending: userIsPending,
  } = useUser({ id: props.data.user_id, username: "" });

  const date = new Date(props.data.created_at);

  return (
    <div className="card" key={nanoid()}>
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
          {/*
           */}
        </div>
      </div>
      {isAuthenticated && props.data.user_id === id && (
        <div className="post-information">
          <Link to={`/delete/comment/${props.data.id}`} className="delete-item">
            Delete
          </Link>
        </div>
      )}
    </div>
  );
};

export default CommentCard;
