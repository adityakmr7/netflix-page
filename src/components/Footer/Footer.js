import React from 'react';
import styled, { css } from 'styled-components';

const Footer = styled.footer`
    margin: 0 auto;
    width: 70%;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

const Text = styled.p`
    color: #777;
    font-weight: 100;
    margin: 5px 0 30px;
    ${props => props.small && css`
        font-size: 13px;
    `}
`;

const MainList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    font-weight: 100;
`;

const List = styled.li`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    flex: none;
    width: 25 %;
    list-style: none;
    margin: 0 0 16 px;
    padding-right: 12 px;
    min-width: 100 px;
    font-size: 13 px;
    a {
      text-decoration: none;
      span {
        color: #777;
        &:hover {
          text-decoration: underline;
        }
      }
    }
`;
const footer = () => {
    return (
        <Footer>
            <Text>Questions? Contact Us.</Text>
            <MainList>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>FAQ</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Help Center</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Account</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Media Center</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Investor Relations</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Jobs</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Ways to Watch</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Terms of Use</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Privacy</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Cookie Preferences</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Corporate Information</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Contact us</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Speed Test</span></a>
                </List>
                <List>
                  <a href="https://help.netflix.com/en/node/412"><span>Netflix Originals</span></a>
                </List>
            </MainList>
            <br/>
            <Text small>Netflix India</Text>
        </Footer>
    );
}

export default footer;