import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Zoom from '@material-ui/core/Zoom'
import VizSensor from 'react-visibility-sensor';
import GamepadIcon from '@material-ui/icons/Gamepad';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { darken } from 'polished';
import { device } from './breakpoints'

export default function ProjectsSection() {
    const [visible, setVisible] = useState(false);

    return (
        <ContainerStyled>
            <h1>Personal Projects</h1>
            <Link href="https://github.com/xLilianW">My GitHub &rarr;</Link>
            <VizSensor
                onChange={(isVisible) => {
                    if (isVisible) { setVisible(true) } 
                }}
            >
                <CardContainer>
                    <Zoom in={visible} timeout={500}>
                        <Card>
                            <CardBase color="#344fc7">
                                <IconWrapper>
                                    <GamepadIcon fontSize="inherit"/>
                                </IconWrapper>
                                <h2>Simon</h2>
                                <Caption>Memory Game</Caption>
                            </CardBase>
                            <CardOverlay></CardOverlay>
                            <CardContent>
                                <div>
                                    <h2>Simon</h2>
                                    <p>A javascript version of the classic memory game</p>
                                </div>
                                <ButtonContainer>
                                    <Button primary color="#344fc7">View</Button>
                                    <Button>Code</Button>
                                </ButtonContainer>
                            </CardContent>
                        </Card>
                    </Zoom>
                    <Zoom in={visible} timeout={500}>
                        <Card>
                            <CardBase color="#c9482e">
                                <IconWrapper>
                                    <LiveHelpIcon fontSize="inherit" />
                                </IconWrapper>
                                <h2>KnowIt?</h2>
                                <Caption>Trivia Webapp</Caption>
                            </CardBase>
                            <CardOverlay></CardOverlay>
                            <CardContent>
                                <div>
                                    <h2>KnowIt?</h2>
                                    <p>A React trivia webapp that uses the Open Trivia DB API</p>
                                </div>
                                <ButtonContainer>
                                    <Button primary color="#c9482e">View</Button>
                                    <Button>Code</Button>
                                </ButtonContainer>
                            </CardContent>
                        </Card>
                    </Zoom>
                    <Zoom in={visible} timeout={500}>
                        <Card>
                            <CardBase color="#248225">
                                <IconWrapper>
                                    <RateReviewIcon fontSize="inherit" />
                                </IconWrapper>
                                <h2>YelpCamp</h2>
                                <Caption>Review Site</Caption>
                            </CardBase>
                            <CardOverlay></CardOverlay>
                            <CardContent>
                                <div>
                                    <h2>YelpCamp</h2>
                                    <p>A MERN stack webapp that allows users to review campgrounds</p>
                                </div>
                                <ButtonContainer>
                                    <Button primary color="#248225">View</Button>
                                    <Button>Code</Button>
                                </ButtonContainer>
                            </CardContent>
                        </Card>
                    </Zoom>
                </CardContainer>
            </VizSensor>
        </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    padding: 3em 1em;
    text-align: center;

    @media ${device.laptop} {
        padding: 3;
    }
`;

const CardContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
        width: 80%;
    }

    @media ${device.desktop} {
        width: 60%;
    }
`;

const CardContent = styled.div`
    color: white;
    position: absolute;
    top: 10%;
    left: 10%;
    bottom: 10%;
    right: 10%;
    width: 80%;
    text-align: center;
    opacity: 0;
    transition: .5s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CardOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: black;
`;

const Card = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
    flex-grow: 1;
    height: 250px;
    margin: 1.5em;

    &:hover ${CardContent} {
        opacity: 1;
    }

    &:hover ${CardOverlay} {
        opacity: 0.7;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Button = styled.button`
    border: 1px white solid;
    color: white;
    background: transparent;
    padding: 0.7em;
    width: 40%;
    border-radius: 4px;
    transition: .5s ease;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
    
    ${props => props.primary && css`
        background-color: ${props => props.color};
        color: white;

        &:hover {
            background-color: ${props => darken(0.1, props.color)};
        }
    `}
`;

const Link = styled.a`
    color: #691fb8;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const CardBase = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};

    h2 {
        margin: 0;
    }
`;

const IconWrapper = styled.div`
    font-size: 5em;
`;

const Caption = styled.p`
    margin-bottom: 0;
`;