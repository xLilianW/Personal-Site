import React from 'react';
import styled, { css } from 'styled-components';
import unsw from '../images/unsw.png';
import fortStreet from '../images/fort_street.png';
import Slide from '@material-ui/core/Slide';

export default function EducationSection() {
    return (
        <ContainerStyled>
            <h1>Education</h1>
            <CardContainer>
                <Slide in mountOnEnter direction="right">
                    <Card>
                        <CardImage>
                            <CompanyLogo src={unsw} />
                        </CardImage>
                        <CardContent>
                            <h2>Unversity of New South Wales</h2>
                            <h4>Bachelor's of Software Engineering (Honours)</h4>
                            <p>2018 - 2022</p>
                            <p>84.8 WAM</p>
                        </CardContent>
                    </Card>
                </Slide>
                <Slide direction="left" in mountOnEnter>
                    <Card>
                        <CardImage>
                            <CompanyLogo src={fortStreet} />
                        </CardImage>
                        <CardContent>
                            <h2>Fort Street High School</h2>
                            <h4>Higher School Certificate</h4>
                            <p>2012 - 2018</p>
                            <p>97.75 ATAR</p>
                        </CardContent>
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
    flex-direction: row;
`;

const Card = styled.div`
    margin: 1em;
    padding: 2em;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    text-align: center;
    flex-basis: 50%;
`;

const CardContent = styled.div`
    flex-grow: 1;
`;

const CardImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
`;

const CompanyLogo = styled.img`
    max-height: 80px;
`;