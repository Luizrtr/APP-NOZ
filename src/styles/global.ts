import { createGlobalStyle } from 'styled-components';

const StylesBase = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  /* Colors */
  --white: #ffffff;
  --blue: #2E63F7;
  --gray: #333333;
  --gray-300: #999999;
  --pink: #AB2680;

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
    color: var(--white);
    background: #E5E5E5;
}


body,
input,
textarea,
select,
button {
  font: 400 1rem "Heebo", sans-serif;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
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
