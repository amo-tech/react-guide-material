const Example = () => {
  const clickHandler = () => {
    alert("clicked");
  };
  const clickHandler2 = () => {
    console.log("clicked")
  };
  return (
    <>
      {/* clickHandlerに()付けると実行結果が帰ってくる　return文がないものはundefined */}
      <button onClick={clickHandler}>Click!</button> 
      <button onClick={clickHandler2}>Click!</button>
    </>
  );
};

export default Example;
