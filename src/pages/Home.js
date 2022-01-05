import styled from 'styled-components'
import {useRecoilValue} from "recoil";
import {calcIncreaseState} from "../atoms/common.selector";
import HomeContainer from "../views/Home/containers/HomeContainer";

const Home = () => {

    const currentSize = useRecoilValue(calcIncreaseState)

    return(
        <Container>
            {/*{currentSize}*/}
            <HomeContainer/>
        </Container>
    )
};

const Container = styled.div`

`;

export default Home;
