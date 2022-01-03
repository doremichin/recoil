import styled from 'styled-components'
import {useSetRecoilState} from "recoil";
import {calcState} from "../../atoms/common.atom";

const ResetButton = () => {

    const setCalcState = useSetRecoilState(calcState)

    return(
        <Container onClick={() => setCalcState(1)}>
            Reset
        </Container>
    )
};

const Container = styled.div`
  position: fixed;
  top: 180px;
  right: 50px;
  background-color: #18f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;

export default ResetButton;
