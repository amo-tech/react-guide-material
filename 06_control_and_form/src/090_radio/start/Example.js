import { useState } from "react";

const Example = () => {
  const radioCollection = ["apple", "banana", "cherry"];
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);

  return (
    <>
      {radioCollection.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        )
      })}
      <h3>I wanna eat 3 {fruit}s</h3>
    </>
  );
};

export default Example;
