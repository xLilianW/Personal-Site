import React from 'react';
import styled, { css } from 'styled-components';
import unsw from '../images/unsw.png';
import fortStreet from '../images/fort_street.png';

export default function EducationSection() {
    return (
        <ContainerStyled>
            <h1>Education</h1>
            <CardContainer>
                <Card>
                    <CardImage>
                        <CompanyLogo src={unsw} />
                    </CardImage>
                    <CardContent left>
                        <h2>Unversity of New South Whales</h2>
                        <h4>2018 - Present | Bachelor's of Software Engineering (Honours) | 84.8 WAM </h4>
                        <ul>
                            <li>Database Systems: 96</li>
                            <li>Web Front-End Programming: 92</li>
                            <li>Human Computer Interaction: 86</li>
                            <li>Data Structures and Algorithms: 85</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent right>
                        <h2>Fort Street High School</h2>
                        <h4>Class of 2017 | 97.75 ATAR</h4>
                        <p>Advanced Mathematics, English Advanced, Software Design & Development, Chemistry, Ancient History</p>
                    </CardContent>
                    <CardImage>
                        <CompanyLogo src={fortStreet} />
                    </CardImage>
                </Card>
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
`;

const CardContent = styled.div`
    flex-grow: 1;
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