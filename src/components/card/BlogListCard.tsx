import React from "react";
import Card from "./Card";

type Props = {
  data: IBlog[];
};

const BlogListCard = (props: Props) => {
  return (
    <>
      {props.data?.map((res) => {
        return (
          <Card
            name={res.user_id}
            text={res.text}
            likes={11}
            comments={11}
            date={res.created_at}
          />
        );
      })}
    </>
  );
};

export default BlogListCard;
