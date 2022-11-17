import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "red" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];

const Example = () => {
  //()はhtml, {}はJS
  return (
    <div>
      <Container title="順番通り" >
        {/* Profileの中身を調べるときはそのComponentに飛ぶ */}
        <Profile key={profile[0].name} {...profile[0]} />
        <Profile key={profile[1].name} {...profile[1]} />
      </Container>
    </div>
  );
};

export default Example;
