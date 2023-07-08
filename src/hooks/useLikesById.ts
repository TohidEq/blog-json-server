import React, { useEffect, useState } from "react";
import axios from "../api/axios";

type Props = {
  startAt: number;
  user_id: string;
};

const useLikesById = (props: Props) => {
  const [data, setData] = useState<ILike[]>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        await axios
          .get(`likes?user_id=${props.user_id}`, {
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
          setError(err.message);
        } else {
          setError(err.message);

          // console.log(err.message);
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

export default useLikesById;
