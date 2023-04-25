import React from "react";
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { validEmail, validPassword } from "../../../utils/regex";
import { useSignInEmailPassword } from "@nhost/react";

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

  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error: nhostError,
  } = useSignInEmailPassword();

  const showPasswrdHandler = () => {
    setShowPasswrd(!showPasswrd);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleCheckSubmit()) {
      console.log(signInEmailPassword(email, passwrd));
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

    return !(error.email || error.passwrd);
  };

  if (isSuccess) {
    return <Navigate to="/" replace={true} />;
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <div className="sign-in-up">
      <h2 className="page-title">Sign in</h2>

      {needsEmailVerification ? (
        <p>
          Please check your mailbox and follow the verification link to verify
          your email.
        </p>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <div className={error.email ? "error input" : "input"}>
            <input
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              type="text"
              placeholder="Email"
              disabled={disableForm}
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
              disabled={disableForm}
            />
            <div className="show-passwrd" onClick={showPasswrdHandler}>
              {showPasswrd ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="btns">
            <button className="btn" type="submit" disabled={disableForm}>
              {isLoading ? "Loading..." : "Sign in"}
            </button>
            <Link to="/sign-up">Create account </Link>
          </div>
          <p className="error">
            {(error.email || error.passwrd) && (
              <>
                Please insert correct values.
                <br />
                <br />
              </>
            )}

            {isError && <>{nhostError?.message}</>}
          </p>
        </form>
      )}
    </div>
  );
};

export default SignIn;
