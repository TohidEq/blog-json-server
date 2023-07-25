import React from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import useCheckUserLikesThisOrNot from "../../../hooks/useCheckUserLikesThisOrNot";
import { Link, useNavigate, useParams } from "react-router-dom";
import useLikesByIdAndBlogId from "../../../hooks/useLikesByIdAndBlogId";

const NewLike = () => {
  const navigate = useNavigate();
  const { isAuthenticated, username, id } = useAuth();
  const { blog_id: blog_id } = useParams(); //.method !== undefined ? useParams() : { blog_id: "1" }; // default value

  const {
    data: resData,
    isPending,
    error,
  } = useCheckUserLikesThisOrNot({
    user_id: id,
    blog_id: blog_id!,
  });

  const handleLike = async () => {
    axios
      .post("/likes", {
        user_id: id,
        blog_id: blog_id,
      })
      .then((response) => {
        console.log("Success post: ", response);
        navigate(`/blog/${blog_id}`);
      })
      .catch((error) => {
        console.log("Error post: ", error);
      });
  };

  const handleDisLike = () => {
    axios
      .delete(`/likes/${resData![0].id}`)
      .then((response) => {
        console.log("Success delete: ", response);
        navigate(`/blog/${blog_id}`);
      })
      .catch((error) => {
        console.log("Error delete: ", error);
      });
  };

  if (isAuthenticated) {
    if (!isPending && resData) {
      if (resData.length === 0) {
        console.log("liking...", resData, resData.length);
        handleLike();
      } else {
        console.log("my like id..., deleting", resData[0].id);
        handleDisLike();
      }
    }
  } else {
    navigate("/sign-in");
  }
  return <Link to={`/blog/${blog_id!}`}>Go Back to Blog</Link>;
};

export default NewLike;
