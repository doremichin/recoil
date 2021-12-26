import styled from 'styled-components'
import {useRecoilValue} from "recoil";
import {filteredTodoListState, todoListState} from "../atom";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState)


    return(
        <Container>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoItemCreator/>
            {
                todoList.map((todoItem , index) => (
                    <TodoItem item={todoItem} key={todoItem.id || index}/>
                ))
            }
        </Container>
    )
};

const Container = styled.div`

`;

export default TodoList;
