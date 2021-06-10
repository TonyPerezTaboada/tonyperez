import React from "react";
import { Link } from "react-router-dom";

import "../css/Children.css";
import "../css/NotFound.css";

const NotFound = () => {
  return (
    <div className="Children-error">
      <div className="Message">
        <h1>Not Found 💣</h1>
        <Link to="/">
          <button type="button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
