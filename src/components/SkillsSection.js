import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from '@material-ui/core/Fade';
import VizSensor from 'react-visibility-sensor';
import { device } from './breakpoints'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SkillsSection() {
    const matches = useMediaQuery('(max-width:1024px)');
    const [frontendIn, setFrontendIn] = useState(false);
    const [backendIn, setBackendIn] = useState(false);
    const [otherIn, setOtherIn] = useState(false);

    const fadeCardsIn = () => {
        setFrontendIn(true);
        setTimeout(() => setBackendIn(true), 250)
        setTimeout(() => setOtherIn(true), 500)
    };

    return (
        <ContainerStyled>
            <h1>Technologies</h1>
            <VizSensor
                onChange={(isVisible) => {
                    if (isVisible) { fadeCardsIn() } 
                }}
                active={!matches}
            >
                <CardContainer>
                    <Fade timeout={500} in={matches || frontendIn}>
                        <Card>
                            <h2>Frontend</h2>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla JS</li>
                                <li>ReactJS</li>
                            </ul>
                        </Card>
                    </Fade>
                    <Fade timeout={500} in={matches || backendIn}>
                        <Card>
                            <h2>Backend</h2>
                            <ul>
                                <li>Ruby on Rails</li>
                                <li>NodeJS</li>
                                <li>Python</li>
                                <li>C</li>
                                <li>Bash</li>
                            </ul>
                        </Card>
                    </Fade>
                    <Fade timeout={500} in={matches || otherIn}>
                        <Card>
                            <h2>Other</h2>
                            <ul>
                                <li>PostgreSQL</li>
                                <li>Git</li>
                                <li>Figma</li>
                            </ul>
                        </Card>
                    </Fade>
                </CardContainer>
                </VizSensor>
        </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    background-color: #691fb8;
    color: white;
    padding: 3em 1em;

    @media ${device.laptop} {
        padding: 3;
    }
`;

const CardContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    margin-bottom: 2em;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
        width: 80%;
    }

    @media ${device.desktop} {
        width: 60%;
    }
`;

const Card = styled.div`
    border: 1px white solid;
    text-align: center;
    flex-grow: 1;
    margin: 1em 0.5em;
    padding: 1em;
    border-radius: 4px;

    ul {
        list-style: none;
        width: 70%;
        margin: auto;
        padding: 0;
    }

    li {
        margin: 0.5em 0;
    }
      
    ul li:before {
        content: '✓ ';
        font-weight: bold;
    }

    @media ${device.laptop} {
        margin: 1em;
        padding: 2em;
    }
`;