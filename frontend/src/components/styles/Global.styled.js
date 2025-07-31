import { createGlobalStyle } from "@vue-styled-components/core";

export const GlobalStyle = createGlobalStyle`
    
:root {
  --bg-dark: #0D0D0D;
  --accent-orange: #FFA726;
  --accent-red: #EF5350;
  --text-primary: #E0E0E0;
  --text-secondary: #9E9E9E;
  --line-gray: #333333;
  --border-gray: #444444;
  --border-gray: rgb(38 38 38 / 01);

  --accent-orange-faded: rgba(255, 167, 38, 0.1);
  --accent-red-faded: rgba(239, 83, 80, 0.1);
  --linear-gradient: linear-gradient(90deg, var(--accent-red) 0%, var(--accent-orange) 100%);
  --text-gradient: linear-gradient(90deg, var(--accent-red) 0%, var(--accent-orange) 80%);
}
html {
  scrollbar-width: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: var(--text-primary);
  background: var(--bg-dark);
  transition:
    color 0.5s,
    background-color 0.5s;
  line-height: 1.6;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

li{
    list-style: none;
}
a{
    text-decoration: none;
}

`;