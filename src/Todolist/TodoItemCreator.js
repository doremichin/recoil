import styled from 'styled-components'
import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {todoListState} from "../atom";

let id = 0;
function getId() {
    return id++;
}

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListState)

    const addItem = () => {
        setTodoList((oldTodolist) => [
            ...oldTodolist,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            }
        ])
        setInputValue('')
    }

    const onChange = ({target : {value}}) => {
        setInputValue(value)
    }

    return(
        <Container>
            <input type="text" value={inputValue} onChange={onChange}/>
            <button onClick={addItem}>Add</button>
        </Container>
    )
};

const Container = styled.div`

`;

export default TodoItemCreator;
