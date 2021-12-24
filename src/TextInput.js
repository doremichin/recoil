import styled from 'styled-components'
import {useRecoilState} from "recoil";
import {textState} from "./App";

const TextInput = () => {
    const [text, setText] = useRecoilState(textState)

    const onChange = (e) => {
        setText(e.target.value);
    }

    return(
        <Container>
            <input type="text" value={text} onChange={onChange}/>
            <br/>
            Echo : {text}
        </Container>
    )
};

const Container = styled.div`

`;

export default TextInput;
