import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"]
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"]
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"]
  }
];

const Example = () => {
  return (
    <>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            <Profile {...person}/>
            {/* // mapは配列(list)に対して、スプレッド構文はオブジェクトに対して行う*/}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
