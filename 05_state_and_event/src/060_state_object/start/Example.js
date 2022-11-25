import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState({ name: "TOM", age: 18});
  return(
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.name}</h3>
    </>
  )
};

export default Example;
