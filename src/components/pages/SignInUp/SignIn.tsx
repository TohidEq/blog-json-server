import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye as fasEye,
  faEyeSlash as fasEye2,
} from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

type Props = {};

const SignIn = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [passwrd, setPasswrd] = useState<string>("");

  const [rqrd, setRqrd] = useState<boolean>(false);
  const [showPasswrd, setShowPasswrd] = useState<boolean>(false);

  const showPasswrdHandler = () => {
    setShowPasswrd(!showPasswrd);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRqrd(true);
    // email, passwrd bla bla bla
  };
  const handleSubmit2 = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    setRqrd(true);
    // email, passwrd bla bla bla
  };

  return (
    <div className="sign-in-up">
      <h2 className="page-title">Sign in</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={rqrd ? "required" : ""}
            value={email}
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div className="input">
          <input
            onChange={(e) => setPasswrd(e.target.value)}
            className={rqrd ? "required" : ""}
            value={passwrd}
            type={showPasswrd ? "text" : "password"}
            placeholder="Password"
            required
          />
          <div className="show-passwrd" onClick={showPasswrdHandler}>
            <FontAwesomeIcon icon={showPasswrd ? fasEye : fasEye2} />
          </div>
        </div>
        <div className="btns">
          <button className="btn" type="submit" onClick={handleSubmit2}>
            Sign in
          </button>
          <Link to="/sign-up">Create account </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
