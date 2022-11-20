import React from "react";

const Bye = () => {
      return <h2>GoodBye!</h2>;
}

const Example = () => {
  return (
    <div>
      <Bye/>
    </div>
  );
};

// htmlタグで囲まれた部分BABELで変換される(React.createElement)→
// htmlタグはtypeになり、要素はpropsの中でchildrenになる

console.log(Example());

export default Example;

