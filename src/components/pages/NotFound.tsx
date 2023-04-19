import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="pt-9">
      <h2 className="text-center">404 - NotFound</h2>

      <Link to="/" className="block text-center pt-2">
        Bach to Home
      </Link>
    </div>
  );
}
