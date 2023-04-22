import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FaUserCircle,
  FaHome,
  FaHeart,
  FaSearch,
  FaQuestion,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import React from "react";

import { Link, NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

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

  return (
    <aside>
      {/* Profile of SignIn/Up --> */}
      <NavLink to={"/profile"} className="side-item side-profile">
        <div className="svg rounded-full overflow-hidden">
          <FaUserCircle />
        </div>
        <span>Profile</span>
      </NavLink>
      {/* <-- end profile or SignIn/Up */}
      <div className="side-links-container">
        <div className="side-links">
          <NavLink to={"/"} className="side-item" end>
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

          <NavLink to={"/likes"} className="side-item">
            <div className="svg">
              <FaHeart />
            </div>
            <span>Likes</span>
          </NavLink>
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
