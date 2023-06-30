import React, { useRef } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import axios from "../../../api/axios";

type Props = {};
const INSERT_BLOG = ``;
function Create({}: Props) {
  let location = useLocation();

  const navigate = useNavigate();

  const blogText = useRef<HTMLTextAreaElement>(null);
  const [disableForm, setDisableForm] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisableForm(true);
    axios
      .post("/blogs", {
        user_id: sessionStorage.getItem("user_id"),
        text: blogText.current!.value,
        created_at: new Date().getTime(),
      })
      .then((response) => {
        console.log("Success post: ", response);
      })
      .catch((error) => {
        console.log("Error post: ", error);
      });

    alert("Blog Created ^_^");
    navigate("/");
  };

  return (
    <div className="sign-in-up">
      <h2 className="page-title">Create New Post</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className={"input"}>
          <TextareaAutosize
            required
            minRows={6}
            autoComplete="off"
            ref={blogText}
            id="text"
            placeholder="text"
            disabled={disableForm}
          />
        </div>

        <div className="btns">
          <button className="btn" type="submit" disabled={disableForm}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
