import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      const newFruit = { ...fruit };
      if (newFruit.label === e.target.value) {
        newFruit.checked = !fruit.checked;
      }
      return newFruit;
    });
    setFruits(newFruits);

    let sumVal = 0;
    newFruits.forEach(fruit => {
      if (fruit.checked) {
        sumVal += fruit.value
      }
    })
    setSum(sumVal);
  };

  return (
    <div>
      {fruits.map(fruits => {
        return (
          <div key={fruits.label}>
            <input id={fruits.label} type="checkbox" value={fruits.label} checked={fruits.checked} onChange={handleChange} />
            <label htmlFor={fruits.label}>{fruits.label}:{fruits.value}</label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
