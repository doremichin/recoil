import styled from 'styled-components'
import {useRecoilValue} from "recoil";
import {getPhotosQuery} from "../../../atoms/query.selector";
import SearchBox from "../../shared/SearchBox";

const HomeContainer = () => {

    const result = useRecoilValue(getPhotosQuery);
    console.log(result);

    return(
        <Container>
            <Wrapper>
                <SearchBox/>
            </Wrapper>
        </Container>
    )
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
`;

export default HomeContainer;
