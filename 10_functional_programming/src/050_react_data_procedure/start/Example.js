import { useState } from "react";

/* 
POINT Reactでの状態管理(state)と処理(関数コンポーネント)の分離

関数型（純粋関数）
・fn(決まった引数) : propsとstateに依存
  -> 決まった戻り値 : JSX
*/

let value = 0;
const Example = () => {

  // 関数コンポーネントはJSXを作成する場所なので、それ以外の処理は書かない
  const [ state, setState ] = useState(0);
  const increment = () => {
    setState(state + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{state}</h3>
    </>
  );
};

export default Example;
