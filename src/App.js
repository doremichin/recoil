import styled from 'styled-components'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'
import CharacterCounter from "./CharacterCounter";

export const textState = atom({
    key : 'textState',
    default : ''
})
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
                <CharacterCounter/>
            </Container>
        </RecoilRoot>
    )
};

const Container = styled.div`

`;

export default App;
