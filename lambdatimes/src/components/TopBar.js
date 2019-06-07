import React from 'react';
import TopBarContainer from './Styles/TopBar/TopBarContainer';
import Container from './Styles/TopBar/Container';
import ContainerLeft from './Styles/TopBar/ContainerLeft';
import FirstSpan from './Styles/TopBar/FirstSpan';
import ContainerCenter from './Styles/TopBar/ContainerCenter';
import MiddleSpan from './Styles/TopBar/MiddleSpan';
import InnerSpan from './Styles/TopBar/InnerSpan';
import ContainerRight from './Styles/TopBar/ContainerRight';
import RightSpan from './Styles/TopBar/RightSpan';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => (
    <TopBarContainer>
      <Container>
        <ContainerLeft>
          <FirstSpan>TOPICS</FirstSpan><FirstSpan>SEARCH</FirstSpan>
        </ContainerLeft>
        <ContainerCenter>
          <MiddleSpan>GENERAL</MiddleSpan><MiddleSpan>BROWNBAG</MiddleSpan><MiddleSpan>RANDOM</MiddleSpan><MiddleSpan>MUSIC</MiddleSpan><MiddleSpan><InnerSpan>ANNOUNCEMENTS</InnerSpan></MiddleSpan>
        </ContainerCenter>
        <ContainerRight>
          <RightSpan>LOG IN</RightSpan>
        </ContainerRight>
      </Container>
    </TopBarContainer>
  )

export default TopBar;