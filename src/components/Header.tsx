import React from "react";

const Header = () => {
  return (
    <header className="text-white">
      <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight md:leading-[4.68rem]">
        Generate a <br />
        <span className="text-[#00b4d8]">Random Password</span>
      </h1>

      <p className="text-lg md:text-2xl">
        Never use an unsecure password again
      </p>
    </header>
  );
};

export default Header;
