import React from 'react';
import HeaderContainer from './Styles/Header/HeaderContainer';
import DateSpan from './Styles/Header/DateSpan';
import Date from './Styles/Header/Date';
import HeaderOne from './Styles/Header/HeaderOne';
import TemperatureSpan from './Styles/Header/TemperatureSpan';
import Temperature from './Styles/Header/Temperature';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => (
    <HeaderContainer>
      <DateSpan><Date>SMARCH 32, 2018</Date></DateSpan>
      <HeaderOne>Lambda Times</HeaderOne>
      <TemperatureSpan><Temperature>98°</Temperature></TemperatureSpan>
    </HeaderContainer>
  )

export default Header