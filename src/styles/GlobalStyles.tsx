import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    body::-webkit-scrollbar {
    background-color: #201E1E;
    width: 5px;
    }
 
    body::-webkit-scrollbar-track {
        background-color: #201E1E;
    }
 
    body::-webkit-scrollbar-thumb {
    background: linear-gradient(50deg, #24c574, #7f60ee);
    border-radius: 20px;
    }
`;
