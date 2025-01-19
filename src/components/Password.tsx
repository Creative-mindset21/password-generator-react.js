import React, { useCallback, useEffect, useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacter] = useState(false);
  const [length, setLength] = useState(8);
  const [isCopy, setIsCopy] = useState(false);

  // ! GENERATE RANDOM PASSWORDS
  const generateRandomPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = '!"£$%^&*(){}:@?>';

    if (numbers) str += num;
    if (characters) str += char;

    for (let i = 0; i < length; i++) {
      const randomLengths = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomLengths);
    }

    setPassword(pass);
  }, [length, numbers, characters]);

  // ! COPY TO CLIPBOARD
  const copyToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    setIsCopy(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  }, [isCopy]);

  // ! RUN THE FUNCTION WHEN THE PAGE IS FIRST LOADED
  useEffect(() => {
    generateRandomPassword();
  }, []);

  // ! HANDLE THE SUBMIT BUTTON
  const handleSubmit = (e) => {
    generateRandomPassword();
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        {/* PASSWORD INPUT */}
        <input
          type="text"
          name="password"
          value={password}
          className="bg-[#273549] py-2 px-4 rounded-md text-white cursor-pointer w-[80%] md:w-[20%]"
          readOnly
        />

        <div className="flex flex-col gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* RANGE INPUT */}
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <p className="d text-white">
              Length: <span className="text-[#00b4d8] font-bold">{length}</span>
            </p>
          </div>

          {/* RADIO INPUTS */}
          <div className="flex items-center gap-3 text-[#00b4d8] font-semibold">
            <input
              type="checkbox"
              defaultChecked={numbers}
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
              id="numbers"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="flex items-center gap-3 text-[#00b4d8] font-semibold">
            <input
              type="checkbox"
              defaultChecked={characters}
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
              id="characters"
            />
            <label htmlFor="characters">Special Characters</label>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="py-2 px-6 bg-[#00b4d8] text-lg text-white rounded-sm font-semibold border border-transparent duration-300  hover:bg-transparent
             hover:border-[#00b4d8]"
          >
            Generate Passwords
          </button>

          <button
            type="button"
            onClick={copyToClipBoard}
            className="py-2 px-6 border border-[#00b4d8] text-lg text-[#00b4d8] rounded-sm font-semibold bg-transparent hover:bg-[#00b4d8] hover:text-white duration-300"
          >
            Copy
          </button>
        </div>

        <p className="duration-300 transition-all text-white text-[#00b4d8] text-xl">
          {isCopy && "Password Copied"}
        </p>
      </form>
    </section>
  );
};

export default Password;
