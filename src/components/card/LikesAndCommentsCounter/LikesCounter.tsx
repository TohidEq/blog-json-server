import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLikesCounterByBlogId from "../../../hooks/useLikesCounterByBlogId";

type Props = { blog_id: string };

const LikesCounter = (props: Props) => {
  const {
    data: resData,
    error,
    isPending,
  } = useLikesCounterByBlogId({ blog_id: props.blog_id! });

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
      <Link to={"/blog/" + props.blog_id}>
        <span>{resData}</span>
        {/* <span>{props.likes}</span> */}
        <FaHeart />
      </Link>
    );
};

export default LikesCounter;
