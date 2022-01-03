import styled from 'styled-components'
import {useRecoilValue} from "recoil";
import {calcIncreaseState} from "../atoms/common.selector";

const Home = () => {

    const currentSize = useRecoilValue(calcIncreaseState)

    return(
        <Container>
            {currentSize}
        </Container>
    )
};

const Container = styled.div`

`;

export default Home;
