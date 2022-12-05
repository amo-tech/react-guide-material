import {useState} from "react";

const Example = () => {
  const [selected ,setSelected] = useState("Apple");
  const options = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <div>selected fruit: {selected}</div>
    </>
  );
};

export default Example;
