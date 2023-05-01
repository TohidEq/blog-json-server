import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FaUserCircle,
  FaHome,
  FaHeart,
  FaSearch,
  FaQuestion,
  FaMoon,
  FaSun,
  FaPlus,
} from "react-icons/fa";
import React from "react";

import { Link, NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import ProtectedRoute from "../ProtectedRoutes";
import ProtectedComponent from "../ProtectedComponent";
import { useAuthenticationStatus } from "@nhost/react";

{
  // <FontAwesomeIcon icon={farHeart} />
  // <FontAwesomeIcon icon={faUser} />
}

type Props = {
  mode: string;
  changeMode: () => void;
};

const Sidebar = (props: Props) => {
  const { changeMode, mode } = props;

  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  return (
    <aside>
      {/* Profile of SignIn/Up --> */}
      <NavLink
        to={isLoading || !isAuthenticated ? "/sign-in" : "/profile"}
        className="side-item side-profile"
      >
        <div className="svg rounded-full overflow-hidden">
          <FaUserCircle />
        </div>
        <span>{isLoading || !isAuthenticated ? "Sign in" : "Profile"}</span>
      </NavLink>
      {/* <-- end profile or SignIn/Up */}
      <div className="side-links-container">
        <div className="side-links">
          <NavLink to={"/home"} className="side-item" end>
            <div className="svg">
              <FaHome />
            </div>
            <span>Home</span>
          </NavLink>

          <NavLink to={"/search"} className="side-item">
            <div className="svg">
              <FaSearch />
            </div>
            <span>Search</span>
          </NavLink>
          <ProtectedComponent>
            <NavLink to={"/likes"} className="side-item">
              <div className="svg">
                <FaHeart />
              </div>
              <span>Likes</span>
            </NavLink>
            <NavLink to={"/create"} className="side-item">
              <div className="svg">
                <FaPlus />
              </div>
              <span>Create</span>
            </NavLink>
          </ProtectedComponent>
        </div>

        <div className="side-links ">
          <button className="side-item" onClick={changeMode}>
            <div className="svg">{mode == "dark" ? <FaSun /> : <FaMoon />}</div>
            <span>{mode == "dark" ? "Light" : "Dark"}</span>
          </button>
          <NavLink to={"/about-us"} className="side-item">
            <div className="svg">
              <FaQuestion />
            </div>
            <span>About Us</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
