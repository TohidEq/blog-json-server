import React, { useRef } from "react";
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { validEmail, validPassword } from "../../../utils/regex";

type Props = {};

const SignIn = (props: Props) => {
  const email = useRef<HTMLInputElement>(null);
  const passwrd = useRef<HTMLInputElement>(null);

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
      
      console.log("pass");
    } else {
      alert("error");
    }
    // email, passwrd bla bla bla
  };

  const handleCheckSubmit = (): boolean => {
    // check email by regex
    error.email = !validEmail.test(email.current!.value);
    // check password by regex
    error.passwrd = !validPassword.test(passwrd.current!.value);

    setError({ ...error });

    console.log("=======");
    console.log("email:", error.email);
    console.log("pass:", error.passwrd);

    return !(error.email || error.passwrd);
  };

  return (
    <div className="sign-in-up">
      <h2 className="page-title">Sign in</h2>

      <form action="" onSubmit={handleSubmit}>
        <div className={error.email ? "error input" : "input"}>
          <input
            autoComplete="off"
            ref={email}
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className={error.passwrd ? "error input" : "input"}>
          <input
            autoComplete="off"
            ref={passwrd}
            id="passwrd"
            type={showPasswrd ? "text" : "password"}
            placeholder="Password"
          />
          <div className="show-passwrd" onClick={showPasswrdHandler}>
            {showPasswrd ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <div className="btns">
          <button className="btn" type="submit">
            Sign in
          </button>
          <Link to="/sign-up">Create account </Link>
        </div>
        <p className="error">
          {(error.email || error.passwrd) && <>Please insert correct values.</>}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
