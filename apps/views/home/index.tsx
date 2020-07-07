import React, { useState } from 'react';

import { Head } from '@react-ssr/nestjs-express';

import styled, { lightTheme, ThemeProvider } from './theme';

interface IndexProps {
  message: string;
}

const Quote = styled.h1`
  background-color: gray;
  color: ${(props) => props.theme.colors.primary};
  font: 400 36px/1.4 Times, serif, Apple Color Emoji;
  font-style: italic;
  font-weight: normal;
  text-align: left;
  text-align: center;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
`;

const Index = ({ message }: IndexProps): JSX.Element => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Head>
        <title>An example of @react-ssr/nestjs-express</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <p>{message}</p>
        <a href="/about" title="Hello">
          Go to the about page.
        </a>
        <Quote>{counter}</Quote>
        <button
          type="button"
          onClick={() => {
            const newCounter = counter + 1;

            setCounter(newCounter);
          }}
        >
          Inc ++
        </button>
      </ThemeProvider>
    </>
  );
};

export default Index;
