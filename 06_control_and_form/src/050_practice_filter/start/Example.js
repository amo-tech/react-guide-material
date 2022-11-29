import Profile from "./components/Profile";
import { useState } from "react";


const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterName, setFilterName] = useState("");
  return (
    <>
      <input type="text" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
      <ul>
        {persons
          .filter((person) => person.name.indexOf(filterName) !== -1)
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;
