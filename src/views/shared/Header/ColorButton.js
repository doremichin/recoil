import styled from 'styled-components'
import {useSetRecoilState} from "recoil";
import {commonState} from "../../../atoms/common.atom";

const ColorButton = () => {

    const setColor = useSetRecoilState(commonState)

    return(
        <Container onClick={() => setColor('#18f')}>
            to blue
        </Container>
    )
};

const Container = styled.div`
  cursor: pointer;
`;

export default ColorButton;
