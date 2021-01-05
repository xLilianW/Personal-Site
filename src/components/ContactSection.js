import React from 'react';
import styled, { css } from 'styled-components';
import gmail from '../images/gmail.svg';
import linkedin from '../images/linkedin.svg';

export default function ContactSection() {
    return (
        <ContainerStyled>
            <h1>Get in touch!</h1>
            <a href="mailto:lilian.wang1712@gmail.com"><SocialIcon src={gmail} /></a>
            <a href="https://au.linkedin.com/in/lilian-wang-b9bb6715a"><SocialIcon src={linkedin} /></a>
        </ContainerStyled>        
    )
}

const ContainerStyled = styled.div`
    background-color: #691fb8;
    color: white;
    padding: 3em;
    text-align: center;
`;

const SocialIcon = styled.img`
    margin: 1em;
`;