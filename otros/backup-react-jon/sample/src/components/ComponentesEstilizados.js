import React from 'react';
import styled, {css, keyframes, ThemeProvider} from 'styled-components';

export default function ComponentesEstilizados() {
  let mainColor = '#db7093',
    mainAlphaColor80 = '#db709380';

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  `;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props => props.color)};
    color: ${({color}) => color};
    color: ${({color}) => color || '#000'};
    background-color: ${mainColor};
    /* transition: all 0.5s ease-out; */
    transition: ${setTransitionTime('1s')};
    animation: ${fadeIn} 5s ease-out;

    ${({isButton}) => isButton && css`
      margin: auto;
      max-width: 50%;
      border-radius: 0.25rem;
      cursor: pointer;
    `}

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  const light = {
    color: '#222',
    bgColor: '#DDD'
  }

  const dark = {
    color: '#DDD',
    bgColor: '#222'
  }

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bgColor};
  `;

  return (
    <>
      <h2>Styled-Components</h2>
      <MyH3>Estilizado con styled-components</MyH3>
      <MyH3 color='#61dafb'>Estilizado con styled-components</MyH3>
      <MyH3 isButton>H3 estilizado como boton</MyH3>
      <ThemeProvider theme={light}>
          <Box>box light</Box>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
          <Box>box dark</Box>
      </ThemeProvider>
    </>
  );
}
