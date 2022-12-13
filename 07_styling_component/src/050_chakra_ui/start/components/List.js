import { IconButton } from "@chakra-ui/button";
import { HStack, StackDivider, VStack } from "@chakra-ui/layout";
import { VscCheck } from "react-icons/vsc";

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack 
            divider={<StackDivider />}
            borderColor="black.100"
            borderWidth="1px"
            borderRadius="3px"
            p={5}
            alignItems="start"
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing="5">
                        <IconButton 
                            onClick={() => complete(todo.id)}
                            icon={<VscCheck />}
                            isRound
                            bgColor="cyan.100"
                            opacity="0.5"
                        >
                        完了
                        </IconButton>
                        <span>{todo.content}</span>
                    </HStack>
                );
            })}
        </VStack>
    );
}

export default List;