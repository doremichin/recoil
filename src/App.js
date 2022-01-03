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
import Header from "./views/shared/Header";
import {GlobalStyle} from "./style/GlobalStyle";
import Home from "./pages/Home";
import IncreaseButton from "./views/Button/IncreaseButton";
import ResetButton from "./views/Button/ResetButton";


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
            <GlobalStyle/>
            <Container>
                <Header/>
                <Home/>
                <IncreaseButton/>
                <ResetButton/>
            </Container>
        </RecoilRoot>
    )
};

const Container = styled.div`

`;

export default App;
