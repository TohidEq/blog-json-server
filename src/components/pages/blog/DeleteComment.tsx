import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../../api/axios";

type Props = {};

const DeleteComment = (props: Props) => {
  const navigate = useNavigate();
  const { comment_id: comment_id } = useParams(); //.method !== undefined ? useParams() : { blog_id: "1" }; // default value
  const handleDelete = () => {
    axios
      .delete(`/comments/${comment_id}`)
      .then((response) => {
        console.log("Success delete: ", response);
        navigate(`/`);
      })
      .catch((error) => {
        console.log("Error delete: ", error);
      });
  };

  handleDelete();

  navigate(`/`);
  return <Link to={`/`}>Go Home</Link>;
};

export default DeleteComment;
