import styled from 'styled-components'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'
import CharacterCounter from "./CharacterCounter";
import {textState} from "./atom";
import TodoList from "./Todolist/TodoList";


export const charCountState = selector({
    key : 'charCountState',
    get: ({get}) => {
        const text = get(textState)

        return text.length
    }
})

const App = () => {
    return(
        <RecoilRoot>
            <Container>
                {/*<CharacterCounter/>*/}
                <TodoList/>
            </Container>
        </RecoilRoot>
    )
};

const Container = styled.div`

`;

export default App;
