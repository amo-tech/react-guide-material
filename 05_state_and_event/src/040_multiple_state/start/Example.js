import { useState } from "react";

const Example = () => {
    console.log(<Example/>)
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(5);
    const [countC, setCountC] = useState(10);
  return(
      <>
        <p>ボタンAを{countA}回押しました！</p>
        <button onClick={() => {
            setCountA(countA + 1);
        }}>buttonA</button>
        <p>ボタンを{countB}回押しました！</p>
        <button onClick={() => {
            setCountB(countB + 1);
        }}>buttonB</button>
        <p>ボタンCを{countC}回押しました！</p>
        <button onClick={() => {
            setCountC(countC + 1);
        }}>buttonC</button>
      </>
  );
};

export default Example;
