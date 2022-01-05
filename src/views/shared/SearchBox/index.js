import styled from 'styled-components'
import {useState} from "react";
import{useHistory} from'react-router-dom'

const SearchBox = () => {

    const [value, setValue] = useState('');
    const history = useHistory()

    const onChange =(e) => {
        setValue(e.target.value)
    }
    const onSubmit = (e) => {
        history.push(`/photos/${value}`)
    }

    return(
        <Container>
            <Form onSubmit={onSubmit}>
                <Input type="text" onChange={onChange}/>
            </Form>
        </Container>
    )
};

const Container = styled.div`

`;
const Form = styled.form`
  
`;
const Input = styled.input`
  width: 300px;
  padding: 15px;
  border-radius: 100px;
  background-color: #eee;
  border: none;
  outline: none;
`;

export default SearchBox;
