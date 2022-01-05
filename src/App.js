import React, { Suspense } from "react";
import styled from 'styled-components'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil'
import {textState} from "./atom";
import Header from "./views/shared/Header";
import {GlobalStyle} from "./style/GlobalStyle";
import Home from "./pages/Home";
import Routes from "./Routes";


export const charCountState = selector({
    key : 'charCountState',
    get: ({get}) => {
        const text = get(textState)

        return text.length
    }
})

const App = () => {
    return(
        <RecoilRoot>
            <Suspense fallback={<div>Loading...</div>}>
                <GlobalStyle/>
                <Header/>
                <Routes/>
            </Suspense>


        </RecoilRoot>
    )
};


export default App;
