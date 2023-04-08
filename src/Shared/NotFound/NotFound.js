import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-accent">
      <h1 className="text-5xl font-bold pb-5">This route can't be added yet.</h1>
      <Link to="/" className="text-4xl font-semibold">
        Click here and go back Home.
      </Link>
    </section>
  );
};

export default NotFound;
