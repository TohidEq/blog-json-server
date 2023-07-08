import React from "react";
import useBlogFinder from "../../../hooks/useBlogFinder";
import Card from "../../card/Card";
import BlogListCard from "../../card/BlogListCard";
import LikeCard from "../../card/LikeCard";

type Props = {
  likes: ILike[];
};

const UserLikesFinder = (props: Props) => {
  return (
    <div className="Home">
      <div className=" relative sm:w-fit sm:mx-auto">
        {props.likes.map((res) => (
          <LikeCard likeData={res} />
        ))}
      </div>
    </div>
  );
};
export default UserLikesFinder;
