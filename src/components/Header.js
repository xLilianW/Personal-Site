import React from 'react';
import styled from 'styled-components';
import portrait from '../images/portrait.jpeg';
import Fade from '@material-ui/core/Fade'

// adapted from https://codepen.io/plavookac/pen/QMwObb
export default function Headers() {
    return (
        <Fade in timeout={500}>
            <HeaderStyled id="header">
                <HeaderContent>
                    <Bio>
                        <Title>Hi, I'm Lilian.</Title>
                        <Tagline>An aspiring full stack developer</Tagline>
                        <p>A passion for intuitive, accessible and stunning web and mobile applications</p>
                    </Bio>
                    <PortraitWrapper>
                        <Portrait src={portrait} />
                    </PortraitWrapper>
                </HeaderContent>
                <div className="waveWrapper waveAnimation">
                    <div className="waveWrapperInner bgTop">
                        <div className="wave waveTop top" />
                    </div>
                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave waveMiddle mid" />
                    </div>
                    <div className="waveWrapperInner bgBottom">
                        <div className="wave waveBottom bot" />
                    </div>
                </div>
            </HeaderStyled>
        </Fade>
    )
}

const HeaderStyled = styled.div`
    width: 100%;
    height: 100vh;
    color: white;
    position: relative:
`;

const HeaderContent = styled.div`
    z-index: 999;
    position: absolute;
    top: 25%;
    left: 25%;
    right: 25%;
    width: 50%;
    display: flex;
    font-size: 1.2em;
`;

const Title = styled.h1`
    text-align: left;
`;

const Bio = styled.div`
`;

const Portrait = styled.img`
    border-radius: 5em;
    max-height: 170px;
    max-width: 170px;
    margin-left: 2.5em;
`;

const PortraitWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Tagline = styled.h3`
    font-style: italic;
    margin: 0;
`;