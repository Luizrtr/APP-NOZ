import { createGlobalStyle } from 'styled-components';

const StylesBase = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --white: #ffffff;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
    font-family: 'Heebo', sans-serif;
}


body,
input,
textarea,
select,
button {
  font: 400 1rem "Heebo", sans-serif;
}

button {
  cursor: pointer;
}

a {
  // color: initial;
  text-decoration: none;
}
`;

export default StylesBase;
