import { useState } from "react";
import { dummyDataForAccordion as data } from "./dummyData";

const Accordion = () => {
  const [active, setActive] = useState<number[]>([]);
  const [multySelection, setMultySelection] = useState<boolean>(false);

  const handleSelection = (id: number) => {
    if(multySelection) {
        if(!active.includes(id)) {
            setActive((prev) => [...prev, id]);
        } else {
            setActive((prev) => prev.filter(item => item !== id))
        }
    } else {
        if(active.includes(id)) {
            setActive([])
        } else {
            setActive([id])
        }
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-10">
      <h1 className="text-4xl font-bold">Accordion Component:</h1>
      <div className="flex gap-3 justify-center text-xl select-none">
        <label htmlFor="checkbox">Enable Multy Selection:</label>
        <input type="checkbox" onChange={() => setMultySelection(!multySelection)} id="checkbox" className="w-5" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="cursor-pointer bg-blue-500 min-h-[50px] w-[600px]"
              key={item.id}
              onClick={() => handleSelection(item.id)}>
              <div className="flex gap-2 justify-between p-2 items-center before:content-[''] text-xl">
                <h2>{item.question}</h2>
                <span>{active?.includes(item.id) ? "-" : "+"}</span>
              </div>
              {active?.includes(item.id) && (
                <p className="text-lg text-slate-300">{item.answer}</p>
              )}
            </div>
          ))
        ) : (
          <div>No data for Accordion</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
