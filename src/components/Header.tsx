import React from "react";

const Header = () => {
  return (
    <header className="text-white mb-8">
      <h1 className="text-4xl lg:text-6xl font-bold lg:font-bold mb-4 lg:mb-2 leading-tight lg:leading-[4.5rem] tracking-wider">
        Generate a <br />
        <span className="text-[#00b4d8]">Random Password</span>
      </h1>

      <p className="text-lg lg:text-xl">Never use an unsecure password again</p>
    </header>
  );
};

export default Header;
