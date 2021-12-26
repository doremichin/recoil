import styled from 'styled-components'
import {useRecoilValue}from 'recoil'
import {todoListStatsState} from "../atom";

const TodoListStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted
    } = useRecoilValue(todoListStatsState)

    const formattedPercentCompleted = Math.round(percentCompleted * 100)
    return(
        <Container>
            <ul>
                <li>Total items : {totalNum}</li>
                <li>Items completed : {totalCompletedNum}</li>
                <li>Items not completed : {totalUncompletedNum}</li>
                <li>Percent completed : {formattedPercentCompleted}</li>
            </ul>
        </Container>
    )
};

const Container = styled.div`

`;

export default TodoListStats;
