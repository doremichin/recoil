import styled from 'styled-components'
import {useSetRecoilState} from "recoil";
import {calcState} from "../../atoms/common.atom";

const IncreaseButton = () => {

    const setCalcState = useSetRecoilState(calcState)

    return(
        <Container onClick={() => setCalcState(p => p * 2)}>
            Increase
        </Container>
    )
};

const Container = styled.div`
  position: fixed;
  top: 100px;
  right: 50px;
  background-color: #18f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;

export default IncreaseButton;
