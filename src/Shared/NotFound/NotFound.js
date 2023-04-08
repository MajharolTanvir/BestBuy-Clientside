import React from "react";
import { Link } from "react-router-dom";
import PageNotFonud from "../../Utilities/notfound/6342464.jpg";
import { AiFillRightSquare } from "react-icons/ai";

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-accent">
      <img src={PageNotFonud} className="w-[40%] mb-10" alt="" />
      <h1 className="text-5xl font-bold pb-5">
        This route can't be added yet.
      </h1>
      <Link
        to="/"
        className="flex items-center gap-3 text-4xl font-semibold hover:text-primary"
      >
        <AiFillRightSquare className="text-4xl" />
        Click here and go back Home.
      </Link>
    </section>
  );
};

export default NotFound;
