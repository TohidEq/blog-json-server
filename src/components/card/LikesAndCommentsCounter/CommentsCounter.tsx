import React from "react";
import useCommentsCounterByBlogId from "../../../hooks/useCommentsCounterByBlogId";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = { blog_id: string };

const CommentsCounter = (props: Props) => {
  const {
    data: resData,
    error,
    isPending,
  } = useCommentsCounterByBlogId({ blog_id: props.blog_id! });

  if (isPending || error)
    return (
      <Link to={"#"}>
        <span>...</span>
        {/* <span>{props.likes}</span> */}
        <FaComment />
      </Link>
    );
  else
    return (
      <Link to={"/blog/" + props.blog_id}>
        <span>{resData}</span>
        {/* <span>{props.likes}</span> */}
        <FaComment />
      </Link>
    );
};

export default CommentsCounter;
