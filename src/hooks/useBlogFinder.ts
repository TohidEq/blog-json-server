import React, { useEffect, useState } from "react";
import axios from "../api/axios";

type Props = {
  blog_id: string;
};

const useBlogFinder = (props: Props) => {
  const [data, setData] = useState<IBlog>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        await axios
          .get(`blogs?id=${props.blog_id}`, {
            params: {
              _sort: "created_at",
              _order: "DESC",
              //   _start: props.startAt,
              //   _limit: 10,
            },
            signal: controller.signal,
          })
          .then((res) => {
            const json = res.data;
            setError(null);
            setData(json[0]);
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
  }, [props.blog_id]);

  return { data, isPending, error };
};

export default useBlogFinder;
