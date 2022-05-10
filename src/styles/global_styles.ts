import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
    margin: 0;
    }

    html, body {
    height: 100%;
    }

    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    }

    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }

    input, button, textarea, select {
    font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }

    #root, #__next {
    isolation: isolate;
    }
`;

export default GlobalStyle;
