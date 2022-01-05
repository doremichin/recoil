import styled, {css} from 'styled-components'
import ColorButton from "./ColorButton";
import {useRecoilValue} from "recoil";
import {commonState} from "../../../atoms/common.atom";

const Header = () => {

    const color =useRecoilValue(commonState);

    return(
        <Container color={color}>
            <Logo>
                logo
            </Logo>
            <ColorButton/>
            <Nav>
                <NavItem>홈</NavItem>
                <NavItem>이미지</NavItem>
            </Nav>
        </Container>
    )
};

const Container = styled.div`
  ${props => props.color && css`
    background-color: ${props.color};
  `}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
`;
const Logo = styled.div`
  
`;
const Nav = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;
const NavItem = styled.div`
  margin-left: 10px;
`;

export default Header;
