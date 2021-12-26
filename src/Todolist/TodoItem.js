import styled from 'styled-components'
import {useRecoilState} from "recoil";
import {todoListState} from "../atom";



const TodoItem = ({item}) => {
    const [todoList , setTodoList] = useRecoilState(todoListState); //useState 같이 사용하는 듯
    const index = todoList.findIndex((listItem) => listItem === item)

    const editItemText = ({target : {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text : value
        })
        setTodoList(newList)
    }
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete : !item.isComplete
        })
        setTodoList(newList)
    }
    const deleteItem =() => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList)
    }
    return(
        <Container>
            <input type="text" value={item.text} onChange={editItemText}/>
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </Container>
    )
};

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0,index), newValue, ...arr.slice(index+1)];
}
function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index) , ...arr.slice(index + 1)];
}

const Container = styled.div`

`;

export default TodoItem;
