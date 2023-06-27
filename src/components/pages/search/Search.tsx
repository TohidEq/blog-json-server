import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Card from "../../card/Card";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

type Props = {};

const Search = (props: Props) => {
  const { method } =
    useParams().method !== undefined ? useParams() : { method: "blogs" }; // default value

  console.log("search method:", method);
  const navigate = useNavigate();

  const search = useRef<HTMLInputElement>(null);
  const [searchQ, setSearchQ] = useState("/search/");

  //The location.search property is =
  // a string that contains an initial ?
  // followed by the key=value pairs in the query string.
  // If there are no parameters, this value may be the empty string (i.e. '').
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3001/" + method + "?q=" + query;

  // const { error, data, isPending } = useFetch(url);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("tttt:", url, query, queryString);
    navigate(`/search/${method}?q=${search.current!.value}`);
  };

  return (
    <div className="page">
      <h2 className="text-center">Search</h2>
      <div className="sign-in-up ">
        <form action="" onSubmit={handleSubmit} autoComplete="off">
          <div className={"input"}>
            <input
              required
              autoComplete="off"
              ref={search}
              id="search"
              type={"text"}
              placeholder="Search text..."
            />
            <div
              className="show-passwrd"
              onClick={() => {
                console.log(search);
              }}
            >
              <button type="submit">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
        <div className="search-options">
          <NavLink to={`/search/blogs`} end>
            Blogs
          </NavLink>
          <NavLink to={`/search/comments`}>Comments</NavLink>
          <NavLink to={`/search/users`}>Users</NavLink>
        </div>
      </div>

      <div className="search-result w-fit mx-auto">
        <Card
          name="Tohid"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. ditiis vitae. Enim doloribus facilis aliquid ipsa a doloremque?"
          likes={20}
          comments={15}
          date="03/15 12:30"
        />
        <Card
          name="Tohid"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. ditiis vitae. Enim doloribus facilis aliquid ipsa a doloremque?"
          likes={20}
          comments={15}
          date="03/15 12:30"
        />
        <Card
          name="Tohid"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. ditiis vitae. Enim doloribus facilis aliquid ipsa a doloremque?"
          likes={20}
          comments={15}
          date="03/15 12:30"
        />
        <Card
          name="Tohid"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. ditiis vitae. Enim doloribus facilis aliquid ipsa a doloremque?"
          likes={20}
          comments={15}
          date="03/15 12:30"
        />
        <Card
          name="Tohid"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. ditiis vitae. Enim doloribus facilis aliquid ipsa a doloremque?"
          likes={20}
          comments={15}
          date="03/15 12:30"
        />
      </div>
    </div>
  );
};

export default Search;
