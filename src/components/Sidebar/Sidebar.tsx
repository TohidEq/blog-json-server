import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside>
      <div>T</div>
      <div>T</div>
      <FontAwesomeIcon icon={farHeart} />;
    </aside>
  );
};

export default Sidebar;
