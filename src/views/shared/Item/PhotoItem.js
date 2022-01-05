import styled from 'styled-components'

const PhotoItem = ({data}) => {
    return(
        <Container>
            <Image>
                <img src={data.urls.regular} alt=""/>
            </Image>
        </Container>
    )
};

const Container = styled.div`

`;
const Image = styled.div`
  width: 100%;
`;
export default PhotoItem;
