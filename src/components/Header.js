import React from 'react';
import styled from 'styled-components';
import portrait from '../images/portrait.jpeg';
import Fade from '@material-ui/core/Fade'
import { device } from './breakpoints'

// adapted from https://codepen.io/plavookac/pen/QMwObb
export default function Headers() {
    return (
        <Fade in timeout={500}>
            <HeaderStyled id="header">
                <HeaderWrapper>
                    <HeaderContent>
                        <PortraitWrapper>
                            <Portrait src={portrait} />
                        </PortraitWrapper>
                        <Bio>
                            <Title>Hi, I'm Lilian.</Title>
                            <Tagline>An aspiring full stack developer</Tagline>
                            <p>A passion for intuitive, accessible and stunning web and mobile applications</p>
                        </Bio>
                    </HeaderContent>
                </HeaderWrapper>
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
    display: flex;
    font-size: 1.2em;
    flex-direction: column;
    text-align: center;
    width: 80%;

    @media ${device.tablet} {
        width: 70%;
        flex-direction: row;
        text-align: left;
    }

    @media ${device.laptop} {
        width: 50%;
    }

    @media ${device.desktop}  {
        font-size: 1.5em;
    }
`;

const Title = styled.h1`
    text-align: center;

    @media ${device.tablet} {
        text-align: left;
    }
`;

const Bio = styled.div`
`;

const Portrait = styled.img`
    border-radius: 5em;
    max-height: 170px;
    max-width: 170px;
    margin-right: 0;

    @media ${device.tablet} {
        margin-right: 2.5em;
    }
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

const HeaderWrapper = styled.div`
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;    
`;