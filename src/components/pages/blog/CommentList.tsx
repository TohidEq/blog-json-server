import React, { useState } from "react";
import useCommentsByBlogId from "../../../hooks/useCommentByBlogId";
import CommentCard from "../../card/CommentCard";
import PendingCard from "../../card/PendingCard";

type Props = {
  blog_id: string;
};

const CommentList = (props: Props) => {
  const [startAt, setStartAt] = useState(0);
  const {
    data: resData,
    error,
    isPending,
  } = useCommentsByBlogId({ startAt: startAt, blog_id: props.blog_id! });

  //   if (!isPending && resData !== undefined) {
  //     return <CommentCard data={resData} />;
  //   } else {
  //     return <PendingCard />;
  //   }

  return (
    <>
      {isPending && <PendingCard />}
      {!isPending && (
        <>
          <div className="w-full p-2 px-4 flex justify-around">
            <button
              className="btn inline "
              onClick={() => {
                setStartAt(startAt - 10);
              }}
              disabled={startAt < 10}
            >
              Back
            </button>
            <button
              className="btn inline "
              onClick={() => {
                setStartAt(startAt + 10);
              }}
              disabled={resData && resData?.length < 10}
            >
              Next
            </button>
          </div>
        </>
      )}
      {!isPending && resData && resData?.length !== 0 && (
        <>
          {resData?.map((res) => {
            return <CommentCard data={res} />;
          })}
        </>
      )}
      {!isPending && resData && resData?.length !== 0 && (
        <>
          <div className="w-full p-2 px-4 flex justify-around">
            <button
              className="btn inline "
              onClick={() => {
                setStartAt(startAt - 10);
              }}
              disabled={startAt < 10}
            >
              Back
            </button>
            <button
              className="btn inline "
              onClick={() => {
                setStartAt(startAt + 10);
              }}
              disabled={resData && resData?.length < 10}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CommentList;
