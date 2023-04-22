import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Card from "../../card/Card";

type Props = {};

const Search = (props: Props) => {
  const [search, setSearch] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // email, passwrd bla bla bla
  };

  return (
    <div className="page">
      <h2 className="text-center">Search</h2>
      <div className="sign-in-up ">
        <form action="" onSubmit={handleSubmit} autoComplete="off">
          <div className={"input"}>
            <input
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
              id="search"
              value={search}
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
