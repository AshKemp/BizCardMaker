import React from "react";

const Header = ({ Dark, children }) => {
  return (
    <div>
      <header className={"Header" + (Dark ? " Dark" : "")}>
        <h1>{children}</h1>
      </header>
    </div>
  );
};

export default Header;
