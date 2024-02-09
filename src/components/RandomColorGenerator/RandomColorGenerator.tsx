import { useRef, useState } from "react";
import { randomBetween0_255 } from "./helper";

const InputComponent = ({
  red,
  green,
  blue,
}: {
  red: number;
  green: number;
  blue: number;
}) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!inputRef.current) return;
    navigator.clipboard.writeText(inputRef.current.value);
    setIsCopied(true);
  };

  return (
    <div className="flex justify-center gap-5">
      <input
        ref={inputRef}
        id="rgb-color"
        disabled
        value={`rgb(${red},${green},${blue})`}
      />
      <button onClick={handleCopy}>{isCopied ? "Copied" : "Copy"}</button>
    </div>
  );
};

const RandomColorGenerator = () => {
  const [red, setRed] = useState(randomBetween0_255());
  let green = randomBetween0_255();
  let blue = randomBetween0_255();

  const handleClick = () => {
    const newRed = randomBetween0_255();
    setRed(newRed);

    green = randomBetween0_255();
    blue = randomBetween0_255();
  };

  return (
    <div className="mt-10 flex flex-col gap-2 items-center">
      <button
        onClick={handleClick}
        className="border-2 border-red-400 p-2 rounded-xl">
        Generate Random Color
      </button>

      {/* div for display color */}
      <div
        className={`w-[200px] h-[200px]`}
        style={{ backgroundColor: `rgb(${red},${green},${blue})` }}></div>

      <InputComponent red={red} green={green} blue={blue} />
    </div>
  );
};

export default RandomColorGenerator;
