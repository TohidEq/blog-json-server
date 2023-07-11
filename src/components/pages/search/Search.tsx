import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Card from "../../card/Card";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import UserLikes from "../profile/UserLikes";
import useSearch from "../../../hooks/useSearchBlog";
import UserComments from "../profile/UserComments";
import UserPosts from "../profile/UserPosts";
import SearchBlogs from "./SearchBlogs";
import SearchComments from "./SearchComments";
import SearchUsers from "./SearchUsers";

type Props = {};

const Search = (props: Props) => {
  const { method } =
    useParams().method !== undefined ? useParams() : { method: "blogs" }; // default value

  console.log("search method:", method);
  const navigate = useNavigate();

  const [startAt, setStartAt] = useState(0);

  const search = useRef<HTMLInputElement>(null);
  const [searchQ, setSearchQ] = useState("/search/");

  //The location.search property is =
  // a string that contains an initial ?
  // followed by the key=value pairs in the query string.
  // If there are no parameters, this value may be the empty string (i.e. '').
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q") || sessionStorage.getItem("searchquery");
  sessionStorage.setItem("searchquery", query!);
  const url = method + "?q=" + query;
  const {
    data: resData,
    error,
    isPending,
  } = useSearch({
    startAt: startAt,
    query: url,
  });

  console.log("urll:", query === null);

  const location = useLocation();
  console.log("loc:", location.pathname);

  // const { error, data, isPending } = useFetch(url);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
                console.log("search value:", search.current?.value);
              }}
            >
              <button type="submit">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
        <div className="search-options">
          <NavLink to={`/search/blogs?q=${query}`} end>
            Blogs
          </NavLink>
          <NavLink to={`/search/comments?q=${query}`}>Comments</NavLink>
          <NavLink to={`/search/users?q=${query}`}>Users</NavLink>
        </div>
      </div>

      <div className="search-result w-fit mx-auto">
        {!query && "enter something"}

        {query && method === "blogs" && <SearchBlogs url={url} />}
        {query && method === "comments" && <SearchComments url={url} />}
        {query && method === "users" && <SearchUsers url={url} />}
      </div>
    </div>
  );
};

export default Search;
