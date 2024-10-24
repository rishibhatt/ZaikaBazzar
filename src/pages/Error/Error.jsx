import React, { useState } from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="border  w-2/3 mx-auto mt-[50%] sm:mt-64 bg-white p-5">
      <h3>
        Oops! {error.statusText} {error.status}
      </h3>
      <p>
        {" "}
        It looks like the link you followed is broken or the page doesn’t exist.
        Don’t worry, you can easily get back to our delicious offerings by
        returning to the home page.
      </p>
      <Link to="/">
        <button className="mt-5 w-32 bg-[#d35400] p-4  text-white font-bold font-poppins">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
