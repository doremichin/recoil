import styled from 'styled-components'
import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";

const CharacterCounter = () => {
    return(
        <Container>
            <TextInput/>
            <CharacterCount/>
        </Container>
    )
};

const Container = styled.div`

`;

export default CharacterCounter;
