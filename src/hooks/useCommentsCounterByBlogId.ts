import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";

type Props = {
  blog_id: string;
};

const useCommentsCounterByBlogId = (props: Props) => {
  const [data, setData] = useState<number>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        await axios
          .get(`Comments?blog_id=${props.blog_id}`, {
            params: {},
            signal: controller.signal,
          })
          .then((res) => {
            const json = res.data;
            setError(null);
            setData(json.length);
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

export default useCommentsCounterByBlogId;
