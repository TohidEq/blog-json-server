import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";

type Props = {
  startAt: number;
};

const useBlogs = (props: Props) => {
  const [data, setData] = useState<IBlog[]>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        await axios
          .get("blogs", {
            params: {
              _sort: "created_at",
              _order: "DESC",
              _start: props.startAt,
              _limit: 10,
            },
            signal: controller.signal,
          })
          .then((res) => {
            const json = res.data;
            setError(null);
            setData(json);
            setIsPending(false);
          })
          .catch((error) => {
            throw new Error(error);
          });
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted! useFetch.js");
        } else {
          setError(err.message);

          console.log(err.message);
        }
        setIsPending(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [props.startAt]);

  return { data, isPending, error };
};

export default useBlogs;
