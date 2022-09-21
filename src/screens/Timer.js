import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #d4e6ff;
`;
const StyledText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;


export const Timer = () => {
    return (
      <Container>
        <StyledText>Timer</StyledText>
      </Container>
    );
  };