import React from 'react';
import styled from 'styled-components';

export default function AboutSection() {
    return (
        <ContainerStyled>
            <h1>Who am I?</h1>
            <p>
                I am a penultimate year student at UNSW studying a Bachelor's of Software Engineering. 
                Despite the fact that I am still undertaking my studies, I have had experience working in the industry
                and have worked on many projects both with university societies and alone.
                These opportunities have allowed me to hone both my technical and interpersonal skills in an agile and productive environment.
            </p>
            <p>
                My goal is to design and develop user friendly applications that can be accessed by anyone on any device.
                The users' needs come first and I believe the web should be accessible to all.
            </p>
        </ContainerStyled>        
    )
}

const ContainerStyled = styled.div`
    padding: 3em;
    text-align: center;
    width: 60%;
    margin: 0 auto;
`;