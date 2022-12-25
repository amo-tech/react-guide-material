const Example = () => {

  const num = { val: 3 };

  const double = (num) => {
    const newNum = {};
    newNum.val = num.val * 2
    return newNum;
  }
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
