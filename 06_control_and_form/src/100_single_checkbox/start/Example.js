import {useState} from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  const toggleChecked = (e) => {
    setIsChecked(prevstate => !prevstate);
  }; 
  return (
    <>
      <label htmlFor="my-checkbox">check: </label>
      <input
        id="my-checkbox"
        type="checkbox" 
        checked={isChecked}
        onChange={(e)=>toggleChecked(e)}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </>
  );
};

export default Example;
