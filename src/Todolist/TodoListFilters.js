import styled from 'styled-components'
import {useRecoilState} from "recoil";
import {todoListFilterState} from "../atom";

const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({target : {value}}) => {
        setFilter(value)
    }
    return(
        <Container>
            Filter :
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </Container>
    )
};

const Container = styled.div`

`;

export default TodoListFilters;
