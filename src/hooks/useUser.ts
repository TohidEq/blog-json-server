import { useState, useEffect } from "react";
import axios from "../api/axios";

type Props = {
  id: string;
};

const useUser = (props: Props) => {
  axios.get("blogs", {
    params: {
      id: props.id,
    },
  });

  const [data, setData] = useState<IUser>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        await axios
          .get("users", {
            params: {
              id: props.id,
            },
            signal: controller.signal,
          })
          .then((res) => {
            const json = res.data[0];
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
  }, [props.id]);

  return { data, isPending, error };
};

export default useUser;
