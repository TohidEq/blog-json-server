import React from "react";
import { useParams } from "react-router-dom";
import useBlogFinder from "../../../hooks/useBlogFinder";
import Card from "../../card/Card";
import PendingCard from "../../card/PendingCard";
import CommentList from "./CommentList";

type Props = {};

const Blog = (props: Props) => {
  const { blog_id: id } = useParams(); //.method !== undefined ? useParams() : { blog_id: "1" }; // default value

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
            <Card data={resData!} />
            {/* SingleBlogCard */}
            <CommentList blog_id={resData.id} />
          </>
        )}
        {isPending && <PendingCard />}
      </div>
    </div>
  );
};

export default Blog;
