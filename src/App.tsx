import React from "react";
import Header from "./components/Header";
import Password from "./components/Password";

function App() {
  return (
    <>
      <div className="w-screen h-screen  bg-[#1f2937] pt-28 px-10 md:px-56 md:pt-60">
        <Header />
        <Password />
      </div>
    </>
  );
}

export default App;
