import { useState } from "react";

const Example = () => {
    const [ count, setCount ] = useState(0)
    const add = () => {
        setCount(count + 1);
        setCount(prevState => prevState + 1);
    };
    const minus = () => {
        setCount(count - 1);
    };
  return(
      <>
        <p>現在のカウント数:{count}</p>
        <button onClick={ add }>+</button>
        <button onClick={ minus }>-</button>
      </>
  );
};

export default Example;
