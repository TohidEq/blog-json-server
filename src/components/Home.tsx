import React from "react";
import Card from "./card/Card";
import { FaEye, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import axios from "../api/axios";
import useBlogs from "../hooks/useBlogs";
import useUser from "../hooks/useUser";
import PendingCard from "./card/PendingCard";

type Props = {};

export default function Home({}: Props) {
  const { isAuthenticated } = useAuth();

  const [startAt, setStartAt] = useState(0);
  // `blogs?_sort=created_at&_order=DESC&_start=${startAt}&_limit=10`

  const [data, setData] = useState<IBlog[]>();

  const { data: resData, error, isPending } = useBlogs({ startAt: startAt });

  return (
    <div className="Home">
      {/* (-> BTN-float (Create New Blog btn) */}
      <div className={`float-right ${!isAuthenticated ? "invisible" : ""}`}>
        <NavLink to={"/create"} className={"float-btn"}>
          <FaPlus />
        </NavLink>
      </div>
      {/* end BTN-float <-) */}

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
              return <Card data={res} />;
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
}
