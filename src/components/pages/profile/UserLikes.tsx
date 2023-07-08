import React from "react";

import Card from "../../card/Card";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useBlogs from "../../../hooks/useBlogs";
import useBlogsById from "../../../hooks/useBlogsById";
import useCommentsById from "../../../hooks/useCommentsById";
import useLikesById from "../../../hooks/useLikesById";
import UserLikesFinder from "./UserLikesFinder";

type Props = {
  user_id: string;
};

const UserLikes = (props: Props) => {
  const { isAuthenticated } = useAuth();

  const [startAt, setStartAt] = useState(0);
  // `blogs?_sort=created_at&_order=DESC&_start=${startAt}&_limit=10`

  const [data, setData] = useState<ILike[]>();

  const {
    data: resData,
    error,
    isPending,
  } = useLikesById({ startAt: startAt, user_id: props.user_id });

  return (
    <div className="Home">
      <div className=" relative sm:w-fit sm:mx-auto">
        {resData && resData?.length === 0 && (
          <div className="page p-0">
            <h2 className=" text-center">Ops... no more blogs</h2>
          </div>
        )}
        {isPending && (
          <Card
            name="no user"
            text=". . ."
            likes={99}
            comments={99}
            date="1684090213669"
          />
        )}
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
          <UserLikesFinder likes={resData} />
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

export default UserLikes;
