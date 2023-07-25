import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLikesCounterByBlogId from "../../../hooks/useLikesCounterByBlogId";
import useAuth from "../../../hooks/useAuth";

type Props = { blog_id: string };

const LikesCounter = (props: Props) => {
  const {
    data: resData,
    error,
    isPending,
  } = useLikesCounterByBlogId({ blog_id: props.blog_id! });

  const { isAuthenticated, username: myUsername, id } = useAuth();

  if (isPending || error)
    return (
      <Link to={"#"}>
        <span>...</span>
        {/* <span>{props.likes}</span> */}
        <FaHeart />
      </Link>
    );
  else
    return (
      <Link to={`/like/${props.blog_id}`}>
        <span>{resData}</span>
        {/* <span>{props.likes}</span> */}
        <FaHeart />
      </Link>
    );
};

export default LikesCounter;
