import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../../api/axios";

type Props = {};

const DeleteBlog = (props: Props) => {
  const navigate = useNavigate();
  const { blog_id: blog_id } = useParams(); //.method !== undefined ? useParams() : { blog_id: "1" }; // default value
  const handleDelete = () => {
    axios
      .delete(`/blogs/${blog_id}}`)
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

export default DeleteBlog;
