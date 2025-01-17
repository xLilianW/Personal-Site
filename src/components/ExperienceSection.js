import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import shippit from '../images/shippit.png';
import wiesoc from '../images/wiesoc.png';
import robogals from '../images/robogals.png';
import csesoc from '../images/csesoc.png';
import realSkills from '../images/real_skills.png';
import va from '../images/va.png';
import Slide from '@material-ui/core/Slide';
import { device } from './breakpoints'

export default function ExperienceSection() {
    return (
        <ContainerStyled>
            <h1>Experience</h1>
            <CardContainer>
                <Slide direction="left" in mountOnEnter>
                    <Card>
                        <CardImage>
                            <CompanyLogo src={shippit} />
                        </CardImage>
                        <CardContent left>
                            <h2>Shippit - Junior Software Engineer</h2>
                            <h4>July 2019 - Dec 2020</h4>
                            <p><i>Ruby on Rails</i> | <i>ReactJS</i> | <i>NodeJS</i></p>
                            <p>
                                I developed and maintained both a monolith and micro-frontends in an agile and rapidly evolving startup environment.
                                Along the way I improved my knowledge of testing, writing documentation, infrastructure and technical support.
                            </p>
                        </CardContent>
                    </Card>
                </Slide>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <Card>
                        <CardContent right>
                            <h2>Women in Engineering Society - IT Co-ordinator</h2>
                            <h4>Jan 2020 - Dec 2020</h4>
                            <p><i>ReactJS</i> | <i>Webflow</i> | <i>Zapier</i></p>
                            <p>
                                I worked on a variety of projects that benefited both internal and external students, including a jobs board, degree planner and Slack automations. This was achieved through active participation in weekly meetings, self-learning and effective colaboration in a student-lead team.
                            </p>
                        </CardContent>
                        <CardImage>
                            <CompanyLogo src={wiesoc} />
                        </CardImage>
                    </Card>
                </Slide>
                <Slide direction="up" in mountOnEnter>
                    <Card more>
                        <h2>Other organisations I have worked with</h2><br />
                        <LogoContainer>
                            <CompanyLogo src={csesoc} />
                            <CompanyLogo src={realSkills} />
                            <CompanyLogo src={robogals} />
                            <CompanyLogo src={va} />                    
                        </LogoContainer>
                    </Card>
                </Slide>
            </CardContainer>
        </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    padding: 3em 1em;

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
        width: 80%;
    }

    @media ${device.desktop} {
        width: 60%;
    }
`;

const Card = styled.div`
    margin: 1em 0.5em;
    padding: 1em;
    border-radius: 4px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    flex-direction: column;
    text-align: center;
  
    @media ${device.laptop} {
        flex-direction: row;
        text-align: left;
        margin: 1em;
        padding: 2em;
        
        ${props => props.more && css`
            flex-direction: column;
        `}
    }
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
        
    @media ${device.laptop} {
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
    }
`;

const CardContent = styled.div`
    @media ${device.laptop} {
        ${props => props.right && css`
            text-align: right;
            padding-right: 3em;
        `}

        ${props => props.left && css`
            padding-left: 3em;
        `}
    }
`;

const CardImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    order: -1;

    @media ${device.laptop} {
        order: 0;
    }
`;

const CompanyLogo = styled.img`
    max-height: 10em;
    max-width: 13em;
    margin-bottom: 1.5em;

    @media ${device.laptop} {
        margin: 0;
    }
`;