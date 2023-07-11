import React from "react";
import Card from "./Card";

type Props = {
  data: IBlog[];
};

const BlogListCard = (props: Props) => {
  return (
    <>
      {props.data?.map((res) => {
        return <Card data={res} />;
      })}
    </>
  );
};

export default BlogListCard;
