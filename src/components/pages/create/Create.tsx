import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

type Props = {};
const INSERT_BLOG = ``;
function Create({}: Props) {
  const [blog, setBlog] = useState<string>("");
  const [passwrd, setPasswrd] = useState<string>("");
  const [disableForm, setDisableForm] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisableForm(true);
    try {
      await console.log(1);
    } catch (error) {
      console.error("wtf?! we have an error: ", error);
      setDisableForm(true);
      return alert("Error creating blog");
    }

    setDisableForm(true);
    alert("blog Created");
  };

  return (
    <div className="sign-in-up">
      <h2 className="page-title">Create New Post</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className={"input"}>
          <TextareaAutosize
            minRows={6}
            autoComplete="off"
            onChange={(e) => setBlog(e.target.value)}
            value={blog}
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
