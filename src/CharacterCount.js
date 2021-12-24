import styled from 'styled-components'
import {useRecoilValue} from "recoil";
import {charCountState} from "./App";

const CharacterCount = () => {
    const count = useRecoilValue(charCountState)
    return(
        <Container>
            Character Count : {count}
        </Container>
    )
};

const Container = styled.div`

`;

export default CharacterCount;
