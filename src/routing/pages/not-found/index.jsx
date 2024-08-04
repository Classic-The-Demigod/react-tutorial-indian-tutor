import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      {" "}
      <h3>404 Not Found: This page doesn't exist</h3>
      <Link to={"/recipe-list"}>Go to Recipe List Page</Link>
    </div>
  );
};

export default NotFoundPage;
