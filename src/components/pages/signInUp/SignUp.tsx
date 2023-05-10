import React, { useRef } from "react";
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link, Navigate, useLocation } from "react-router-dom";
import {
  validEmail,
  validPassword,
  validName,
  validUserName,
} from "../../../utils/regex";
import axios from "../../../api/axios";
import { logIn } from "../../../actions/cartAction";
import { useDispatch } from "react-redux";

type Props = {};

const SignUp = (props: Props) => {
  const dispatch = useDispatch();
  let location = useLocation();

  const fName = useRef<HTMLInputElement>(null);
  const lName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const uName = useRef<HTMLInputElement>(null);
  const passwrd = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<{
    email: boolean;
    passwrd: boolean;
    uName: boolean;
    firstName: boolean;
    lastName: boolean;
  }>({
    email: false,
    passwrd: false,
    uName: false,
    firstName: false,
    lastName: false,
  });

  const [showPasswrd, setShowPasswrd] = useState<boolean>(false);

  const showPasswrdHandler = () => {
    setShowPasswrd(!showPasswrd);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // email, passwrd bla bla bla
    if (handleCheckSubmit()) {
      const data = {
        username: uName.current!.value,
        fname: fName.current!.value,
        lname: lName.current!.value,
        email: email.current!.value,
        password: passwrd.current!.value,
      };
      axios
        .post("/users", {
          ...data,
        })
        .then((response) => {
          console.log("Success signup :D -> ", response);
          axios
            .get(`users?username=${uName.current!.value}`)
            .then((res: any) => {
              // log in
              console.log("Success signin(inside signup)!");

              sessionStorage.setItem("user_id", res.data[0].id);
              dispatch({ ...logIn(), payload: { id: `${res.data[0].id}` } });
              return <Navigate to="/" replace state={{ from: location }} />;
            });
        })
        .catch((error) => {
          console.log("error :(  -> ", error);
        });
      console.log("pass");
    } else {
      alert("error");
    }
  };

  const handleCheckSubmit = (): boolean => {
    // check email by regex
    error.email = !validEmail.test(email.current!.value);
    //check last name by regex
    error.uName = !validUserName.test(uName.current!.value);
    // check password by regex
    error.passwrd = !validPassword.test(passwrd.current!.value);
    //check first name by regex
    error.firstName = !validName.test(fName.current!.value);
    //check last name by regex
    error.lastName = !validName.test(lName.current!.value);

    setError({ ...error });

    console.log("=======");
    console.log("email:", error.email);
    console.log("pass:", error.passwrd);
    return !(
      error.uName ||
      error.email ||
      error.passwrd ||
      error.firstName ||
      error.lastName
    );
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
              ref={fName}
              id="firstName"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className={error.lastName ? "error input" : "input"}>
            <input
              autoComplete="off"
              ref={lName}
              id="lastName"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className={error.uName ? "error input" : "input"}>
          <input
            autoComplete="off"
            ref={uName}
            id="uName"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className={error.email ? "error input" : "input"}>
          <input
            autoComplete="off"
            ref={email}
            id="email"
            type="email"
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
            Create account
          </button>
          <Link to="/sign-in">Have account? Sign in</Link>
        </div>
        <p className="error">
          {(error.email ||
            error.passwrd ||
            error.firstName ||
            error.lastName) && (
            <>
              Please insert correct values.
              <br />
              <br />
            </>
          )}

          {error.passwrd && (
            <>
              Passwords should be a minimum of 8 characters in length. Longer
              passwords are more secure and should contain upper and lower case
              characters, numbers, and special characters
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
