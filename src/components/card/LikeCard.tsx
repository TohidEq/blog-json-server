import React from "react";
import useBlogFinder from "../../hooks/useBlogFinder";
import Card from "./Card";

type Props = {
  likeData: ILike;
};

const LikeCard = (props: Props) => {
  const {
    data: resData,
    error,
    isPending,
  } = useBlogFinder({ data: props.likeData });

  if (!isPending && resData !== undefined) {
    return (
      <Card
        name={resData.user_id}
        text={resData!.text}
        likes={11}
        comments={11}
        date={resData!.created_at}
      />
    );
  } else {
    return (
      <Card name={"no user"} text={"11"} likes={11} comments={11} date={"11"} />
    );
  }
};

export default LikeCard;
