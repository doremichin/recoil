import styled from 'styled-components'
import {useParams} from "react-router-dom";
import {getPhotosByIdQuery} from "../../../atoms/query.selector";
import {useRecoilValue} from 'recoil';
import SearchComponent from "../components/SearchComponent";

const SearchContainer = () => {
    const {id} = useParams();
    const SearchResult = useRecoilValue(getPhotosByIdQuery(id))

    return(
        <Container>
            <SearchComponent data={SearchResult}/>
        </Container>
    )
};

const Container = styled.div`

`;

export default SearchContainer;
