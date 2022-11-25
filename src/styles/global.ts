import { css } from '@emotion/react';
import reset from 'emotion-reset';

export const global = css`
  ${reset}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #__next {
    max-width: 500px;
    width: 500px;
    background: white;
    min-height: 100vh;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  button {
    outline: 0;
    border: 0;
    background: none;
    padding: 0;
  }
`;
