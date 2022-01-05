import styled from 'styled-components'
import MainList from "../../shared/List/MainList";

import PhotoItem from "../../shared/Item/PhotoItem";

const SearchComponent = ({data}) => {

    return(
        <Container>
            <MainList data={data.results}>
                {(data) => <PhotoItem data={data}/>}
            </MainList>
        </Container>
    )
};

const Container = styled.div`

`;


export default SearchComponent;
