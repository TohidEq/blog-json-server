import React, { useEffect, useState } from "react";
import axios from "../api/axios";

type Props = {
  user_id: string;
  blog_id: string;
};

const useCheckUserLikesThisOrNot = (props: Props) => {
  const [data, setData] = useState<ILike[]>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        await axios
          .get(`likes?user_id=${props.user_id}&blog_id=${props.blog_id}`, {
            params: {},
            signal: controller.signal,
          })
          .then((res) => {
            const json: ILike[] = res.data;
            json.forEach((element) => {
              console.log("testee", element);
            });
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
  }, []);

  return { data, isPending, error };
};

export default useCheckUserLikesThisOrNot;
