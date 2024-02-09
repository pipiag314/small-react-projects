import { useState } from "react";

const randomBetween0_255 = () => {
    return Math.floor(Math.random() * 256);
}

const RandomColorGenerator = () => {

    const [red, setRed] = useState(randomBetween0_255());
    let green = randomBetween0_255();
    let blue = randomBetween0_255();


    const handleClick = () => {
        const newRed = randomBetween0_255();
        setRed(newRed);

        green = randomBetween0_255();
        blue = randomBetween0_255();
    }

    return (
        <div className="mt-10 flex flex-col gap-2">
            <button onClick={handleClick} className="border-2 border-red-400 p-2 rounded-xl">Generate Random Color</button>
            <div className={`w-[200px] h-[200px]`} style={{backgroundColor: `rgb(${red},${green},${blue})`}}></div>
            <h1>{`rgb(${red},${green},${blue})`}</h1>
        </div>
    )
}

export default RandomColorGenerator;