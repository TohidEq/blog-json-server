import React, { useState } from "react";
import useSearchComment from "../../../hooks/useSearchComment";
import Card from "../../card/Card";
import CommentCard from "../../card/CommentCard";
import PendingCard from "../../card/PendingCard";

type Props = {
  url: string;
};

const SearchUsers = (props: Props) => {
  const [startAt, setStartAt] = useState(0);
  // `blogs?_sort=created_at&_order=DESC&_start=${startAt}&_limit=10`

  const {
    data: resData,
    error,
    isPending,
  } = useSearchComment({ startAt: startAt, query: props.url });

  return (
    <div className="Home">
      <div className=" relative sm:w-fit sm:mx-auto">
        <div className="page py-4">
          <h2 className=" text-center">Home</h2>
          <h2 className=" text-center">
            {resData && resData?.length === 0 && "Ops... no more blogs"}
          </h2>
        </div>
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
      </div>
    </div>
  );
};

export default SearchUsers;
