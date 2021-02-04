import React from 'react';
import styles from 'styled-components';

const StyledDiv = styles.div`
  background-color: #7f7f7f;
`;

const StyledText = styles.text`
  color: green; 
`;
const Home = () => {
  return (
    <StyledDiv>
      <StyledText>welcome home</StyledText>
    </StyledDiv>
  );
};

export default Home;
