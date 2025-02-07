import React from "react";
import Header from "./components/Header";
import Password from "./components/Password";

function App() {
  return (
    <>
      <div className="w-screen h-[100dvh] bg-[#1f2937] pt-28 px-10 md:pt-40 lg:px-56 lg:pt-60">
        <Header />
        <Password />
      </div>
    </>
  );
}

export default App;
