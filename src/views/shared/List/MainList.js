import styled from 'styled-components'

const MainList = ({data,children}) => {
    return(
        <Container>
            <Row>
                {
                    data.map((item,index) => (
                        <Col key={index}>
                            {children(item)}
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 33.33%;
  padding: 0 10px;
  margin-bottom: 20px;
`;


export default MainList;
