import { useCallback, useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? <Count key="A" title="A"/> : <Count key="B" title="B"/>}
    </>
  );
};

const Count = ({title}) => {
  const [count, setCount] = useState(0);
  // important!!memo!! useCallback
  const countUp = useCallback(() => {
    setCount((prevstate) => prevstate + 1);
  }, []);
  const countDown = useCallback(() => {
    setCount((prevstate) => prevstate - 1);
  }, []);

  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
