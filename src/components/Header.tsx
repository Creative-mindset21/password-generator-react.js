import React from "react";

const Header = () => {
  return (
    <header className="text-white mb-8">
      <h1 className="text-3xl md:text-6xl font-bold md:font-extrabold mb-4 md:mb-2 leading-tight md:leading-[4.68rem] tracking-wider">
        Generate a <br />
        <span className="text-[#00b4d8]">Random Password</span>
      </h1>

      <p className="text-lg md:text-xl">Never use an unsecure password again</p>
    </header>
  );
};

export default Header;
