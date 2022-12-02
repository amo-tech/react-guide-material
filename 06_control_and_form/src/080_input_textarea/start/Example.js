import { useState} from "react";

const Example = () => {
  const [val, setVal] = useState("");
  return (
    <>
      <label htmlFor="2">label</label>
      <div>
      <input id="1" placeholder="Hello" value={val} onChange={(e) => setVal(e.target.value)} />
      <textarea id="2" placeholder="Hello" value={val} onChange={(e) => setVal(e.target.value)} />
      </div>
      <br />
      <button>Clear</button>
    </>
  );
};

export default Example;
