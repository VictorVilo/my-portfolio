import React from 'react';
import profile from '../vic.jpg';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const StyledImg = styled.img`
width: 200px;
height: auto;
border: 2px solid #000;
border-radius: 50%;
`;

const StyledH1 = styled.h1`
line-height: 1.5;
letter-spacing: 1.15;
font-family: "Amatic SC";
font-size: 40px;
`;

const StyledH3 = styled.h3`
line-height: 1.5;
letter-spacing: 1.15;
font-family: "Amatic SC";
font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring (() => ({ xys: [0, 0, 1] , config: config.default}))
return (
    <Container
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys: [0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)
        }}
    >
        <StyledImg src={profile} />
        <StyledH1>Hi, <br />
        I'm Victor Githinji</StyledH1>
        <StyledH3>Mobile Application Developer <br />
        Web Developer </StyledH3>
    </Container>

);

}

export default GlassCard;