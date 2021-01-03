import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import shippit from '../images/shippit.png';
import wiesoc from '../images/wiesoc.png';
import robogals from '../images/robogals.png';
import csesoc from '../images/csesoc.png';
import realSkills from '../images/real_skills.png';
import va from '../images/va.png';
import Slide from '@material-ui/core/Slide';

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
                            <h2>Shippit</h2>
                            <p>
                                Sed sed vehicula mauris, nec rhoncus ante. Nam nec aliquam erat. Sed id tellus maximus, interdum eros et, venenatis sapien. Fusce non maximus arcu, vitae blandit tortor. Phasellus quis diam sit amet arcu aliquam suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id hendrerit orci, nec aliquet magna.
                            </p>
                        </CardContent>
                    </Card>
                </Slide>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <Card>
                        <CardContent right>
                            <h2>Women in Engineering Society</h2>
                            <p>
                                Sed sed vehicula mauris, nec rhoncus ante. Nam nec aliquam erat. Sed id tellus maximus, interdum eros et, venenatis sapien. Fusce non maximus arcu, vitae blandit tortor. Phasellus quis diam sit amet arcu aliquam suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id hendrerit orci, nec aliquet magna.
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
    padding: 3em;
`;

const CardContainer = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

const Card = styled.div`
    margin: 1em;
    padding: 2em;
    border-radius: 4px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
    ${props => props.more && css`
        flex-direction: column;
    `}
`;

const LogoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const CardContent = styled.div`
    ${props => props.right && css`
        text-align: right;
        padding-right: 3em;
    `}

    ${props => props.left && css`
        padding-left: 3em;
    `}
`;

const CardImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CompanyLogo = styled.img`
    max-height: 120px;
    max-width: 200px;
`;