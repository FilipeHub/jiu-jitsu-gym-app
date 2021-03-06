import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        min-height: 100%;
    }

    body {
        background: #DDD;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        color: #222;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 14px;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    *:focus {
        outline: 0;
    }
`;
