import React from "react";
import useLikesCounterByBlogId from "../../../hooks/useLikesCounterByBlogId";
import { Link } from "react-router-dom";
import { FaComment, FaHeart } from "react-icons/fa";
import CommentsCounter from "./CommentsCounter";
import LikesCounter from "./LikesCounter";

type Props = { blog_id: string };

const LikeCommentCounter = (props: Props) => {
  return (
    <div className="icons">
      <CommentsCounter blog_id={props.blog_id} />

      <LikesCounter blog_id={props.blog_id} />
    </div>
  );
};

export default LikeCommentCounter;
