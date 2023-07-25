import React from "react";
import { useParams } from "react-router-dom";
import useBlogFinder from "../../../hooks/useBlogFinder";
import Card from "../../card/Card";
import PendingCard from "../../card/PendingCard";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import useAuth from "../../../hooks/useAuth";

type Props = {};

const Blog = (props: Props) => {
  const { blog_id: id } = useParams(); //.method !== undefined ? useParams() : { blog_id: "1" }; // default value
  const { id: user_id, isAuthenticated, username } = useAuth();

  const {
    data: resData,
    error,
    isPending,
  } = useBlogFinder({
    blog_id: id!,
  });

  return (
    <div className="Home">
      <div className=" relative sm:w-fit sm:mx-auto">
        {!isPending && resData !== undefined && (
          <>
            {/* SingleBlogCard */}
            <Card data={resData!} />
            {/* create comment section */}
            {isAuthenticated && (
              <CreateComment blog_id={id!} user_id={user_id} />
            )}
            {/* comment list */}
            <CommentList blog_id={resData.id} />
          </>
        )}
        {isPending && <PendingCard />}
      </div>
    </div>
  );
};

export default Blog;
