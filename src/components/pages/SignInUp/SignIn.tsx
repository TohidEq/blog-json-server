import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye as fasEye,
  faEyeSlash as fasEye2,
} from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { validEmail, validPassword } from "../../../utils/regex";

type Props = {};

const SignIn = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [passwrd, setPasswrd] = useState<string>("");

  const [error, setError] = useState<{
    email: boolean;
    passwrd: boolean;
  }>({
    email: false,
    passwrd: false,
  });
  const [showPasswrd, setShowPasswrd] = useState<boolean>(false);

  const showPasswrdHandler = () => {
    setShowPasswrd(!showPasswrd);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleCheckSubmit()) {
    } else {
    }
    // email, passwrd bla bla bla
  };
  const handleCheckSubmit = (): boolean => {
    // check email by regex
    error.email = !validEmail.test(email);
    // check password by regex
    error.passwrd = !validPassword.test(passwrd);

    setError({ ...error });

    console.log("=======");
    console.log("email:", error.email);
    console.log("pass:", error.passwrd);
    return false;
  };

  return (
    <div className="sign-in-up">
      <h2 className="page-title">Sign in</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className={error.email ? "error input" : "input"}>
          <input
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className={error.passwrd ? "error input" : "input"}>
          <input
            autoComplete="off"
            onChange={(e) => setPasswrd(e.target.value)}
            id="passwrd"
            value={passwrd}
            type={showPasswrd ? "text" : "password"}
            placeholder="Password"
          />
          <div className="show-passwrd" onClick={showPasswrdHandler}>
            <FontAwesomeIcon icon={showPasswrd ? fasEye : fasEye2} />
          </div>
        </div>
        <div className="btns">
          <button className="btn" type="submit">
            Sign in
          </button>
          <Link to="/sign-up">Create account </Link>
        </div>
        <p className="error">
          {error.email || error.passwrd ? `Please insert correct values.` : ""}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
