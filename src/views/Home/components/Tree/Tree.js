import styled from 'styled-components'
import {useEffect, useRef, useState} from "react";
import useMeasure from 'react-use-measure'
import {useSpring , a} from "react-spring";
import * as Icons from './icons'
import {Content, Frame, Title, toggle} from "./styles";

function usePrevious(value) {
    const ref = useRef()
    useEffect(() => (ref.current = value), [value])
    return ref.current
}

const Tree = ({ children, name, style, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [ref, { height: viewHeight }] = useMeasure()
    const { height, opacity, y } = useSpring({
        from: { height: 0, opacity: 0, y: 0 },
        to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
        },
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return(
        <Container>
            <Frame>
                <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
                <Title style={style}>{name}</Title>
                <Content
                    style={{
                        opacity,
                        height: isOpen && previous === isOpen ? 'auto' : height,
                    }}>
                    <a.div ref={ref} style={{ y }} children={children} />
                </Content>
            </Frame>
        </Container>
    )
};

const Container = styled.div`

`;

export default Tree;
