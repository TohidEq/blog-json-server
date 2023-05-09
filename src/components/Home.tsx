import React from "react";
import Card from "./card/Card";
import { FaEye, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";


type Props = {};

export default function Home({}: Props) {
  const { isAuthenticated, isLoading } = {isAuthenticated:true,isLoading:false}

  return (
    <div className="Home">
      <div
        className={`float-right ${
          isLoading || !isAuthenticated ? "invisible" : ""
        }`}
      >
        <NavLink to={"/create"} className={"float-btn"}>
          <FaPlus />
        </NavLink>
      </div>
      <div className=" relative sm:w-fit sm:mx-auto">
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
}
