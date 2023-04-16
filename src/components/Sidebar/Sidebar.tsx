import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle as fasUser,
  faHome as fasHome,
  faHeart as fasHeart,
  faSearch as fasSearch,
  faMoon as fasMoon,
  faQuestion as fasQues,
} from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import React from "react";

import { Link, NavLink } from "react-router-dom";

{
  // <FontAwesomeIcon icon={farHeart} />
  // <FontAwesomeIcon icon={faUser} />
}

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside>
      {/* Profile of SignIn/Up --> */}
      <NavLink to={"/profile"} className="side-item side-profile">
        <FontAwesomeIcon icon={fasUser} />
        <span>Profile</span>
      </NavLink>
      {/* <-- end profile or SignIn/Up */}
      <div className="side-links-container">
        <div className="side-links">
          <NavLink to={"/"} className="side-item" end>
            <FontAwesomeIcon icon={fasHome} />
            <span>Home</span>
          </NavLink>

          <NavLink to={"/search"} className="side-item">
            <FontAwesomeIcon icon={fasSearch} />
            <span>Search</span>
          </NavLink>

          <NavLink to={"/likes"} className="side-item">
            <FontAwesomeIcon icon={fasHeart} />
            <span>Likes</span>
          </NavLink>
        </div>

        <div className="side-links ">
          <button className="side-item">
            <FontAwesomeIcon icon={fasMoon} />
            <span>Theme</span>
          </button>
          <NavLink to={"/about-us"} className="side-item">
            <FontAwesomeIcon icon={fasQues} />
            <span>About Us</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
