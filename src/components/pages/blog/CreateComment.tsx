import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import TextareaAutosize from "react-textarea-autosize";
import axios from "../../../api/axios";

type Props = {
  blog_id: string;
  user_id: string;
};

const CreateComment = (props: Props) => {
  const navigate = useNavigate();

  const blogText = useRef<HTMLTextAreaElement>(null);
  const [disableForm, setDisableForm] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisableForm(true);
    axios
      .post("/comments", {
        //   user_id: sessionStorage.getItem("user_id"),
        text: blogText.current!.value,
        created_at: new Date().getTime(),
        blog_id: props.blog_id,
        user_id: props.user_id,
      })
      .then((response) => {
        console.log("Success post: ", response);
      })
      .catch((error) => {
        console.log("Error post: ", error);
      });

    alert("Comment Created ^_^");
    navigate(`/blog/${props.blog_id}`);
  };

  return (
    <div className="sign-in-up">
      <form action="" onSubmit={handleSubmit}>
        <div className={"input"}>
          <TextareaAutosize
            required
            minRows={6}
            autoComplete="off"
            ref={blogText}
            id="text"
            placeholder="your comment"
            disabled={disableForm}
          />
        </div>

        <div className="btns">
          <button className="btn" type="submit" disabled={disableForm}>
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
