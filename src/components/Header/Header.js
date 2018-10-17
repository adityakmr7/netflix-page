import React from 'react';
import styled from 'styled-components';
import bgimg from './img/bg.jpg';
import Nav from '../Nav/Nav';
import Sectionpitch from '../Section/Pitch/Pitch';

const Header = styled.div`
    background: linear-gradient (
        to right, rgba(0, 0, 0, 0.75),
        rgba(0,0,0,0.09)
    );
    background-image: url(${bgimg});
    height: 100vh;
    width: 100%;
    @media (max-width: 1000px) {
        height: 90vh;
    }
`;

const header = () => {
    return (
        <Header>
            <Nav />
            <Sectionpitch/>
        </Header>
    )
}

export default header;