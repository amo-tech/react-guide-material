import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState(); // 0:参照用の値、1:更新用の関数
  return (
    <>
      <input type="text" onChange={(e) => {
        setVal(e.target.value)
      }} /> = {val}
    </>
  );
};

export default Example;
