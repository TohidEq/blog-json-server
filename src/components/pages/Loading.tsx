import React from "react";

type Props = {
  isPending: boolean;
  error: string | null;
};

const Loading = (props: Props) => {
  const { isPending, error } = props;
  return (
    <>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="ispending">Loading...</p>}
    </>
  );
};

export default Loading;
