import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaComment, FaHeart } from "react-icons/fa";
import useUser from "../../hooks/useUser";

const PendingCard = () => {
  const date = new Date("1688855129323");
  return (
    <>
      <div className="card">
        <Link to={"/#"} className="profile">
          <FaUser className="border-[1px] sm:border-2" />
          <span className="profile-name">. . .</span>
        </Link>
        <p className="text">.. .. .. ..</p>
        <div className="post-information">
          <span className="date">../.. ..:..</span>
          <div className="icons">
            <Link to={"#"}>
              <span>..</span>
              <FaComment />
            </Link>
            <Link to={"#"}>
              <span>..</span>
              <FaHeart />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingCard;
