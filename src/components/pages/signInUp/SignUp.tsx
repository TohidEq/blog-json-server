import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faN,
  faEye as fasEye,
  faEyeSlash as fasEye2,
} from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { validEmail, validPassword, validName } from "../../../utils/regex";

type Props = {};

const SignUp = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [passwrd, setPasswrd] = useState<string>("");
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");

  const [error, setError] = useState<{
    email: boolean;
    passwrd: boolean;
    firstName: boolean;
    lastName: boolean;
  }>({
    email: false,
    passwrd: false,
    firstName: false,
    lastName: false,
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
    //check first name by regex
    error.firstName = !validName.test(fName);
    //check last name by regex
    error.lastName = !validName.test(lName);

    setError({ ...error });

    console.log("=======");
    console.log("email:", error.email);
    console.log("pass:", error.passwrd);

    return false;
  };

  return (
    <div className="sign-in-up">
      <h2 className="page-title">Sign up</h2>

      <form action="" autoComplete="off" onSubmit={handleSubmit}>
        <div className="names-input">
          <div
            className={
              error.firstName ? "error input names-input" : "input names-input"
            }
          >
            <input
              className=""
              autoComplete="off"
              onChange={(e) => setFName(e.target.value)}
              value={fName}
              id="firstName"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className={error.lastName ? "error input" : "input"}>
            <input
              autoComplete="off"
              onChange={(e) => setLName(e.target.value)}
              value={lName}
              id="lastName"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className={error.email ? "error input" : "input"}>
          <input
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="email"
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
          <Link to="/sign-in">Have account? Sign in</Link>
        </div>
        <p className="error">
          {error.email || error.passwrd || error.firstName || error.lastName
            ? `Please insert correct values.`
            : ""}
          <br />
          <br />
          {error.passwrd
            ? `Passwords should be a minimum of 8 characters in length. Longer passwords are more secure and should contain upper and lower case characters, numbers, and special characters`
            : ""}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
