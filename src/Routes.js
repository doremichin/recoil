import styled from 'styled-components'
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

const Routes = () => {
    return(
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/photos/:id'} component={Search}/>
            </Switch>
        </Container>
    )
};

const Container = styled.div`

`;

export default Routes;
