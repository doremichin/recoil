import styled from 'styled-components'
import {animated, config, useSpring} from "react-spring";
import {useState} from "react";

const Text = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return(
        <Container>
            <animated.h1 style={props}>hello</animated.h1>

        </Container>
    )
};

const Container = styled.div`

`;

export default Text;
