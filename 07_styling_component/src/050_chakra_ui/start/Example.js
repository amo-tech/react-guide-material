import { ChakraProvider } from "@chakra-ui/provider";
import { chakraProvider } from "@chakra-ui/react"; 
import Todo from "./components/Todo"

const Example = () => {
  return (
    <>
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Example;
