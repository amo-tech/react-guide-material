import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState({ name: "TOM", age: 18});

  const chageName = (e) => {
    setPerson({name: e.target.value, age: person.age})
  };
  return(
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" onChange={chageName}/>
    </>
  )
};

export default Example;
