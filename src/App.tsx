import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './config/Theme';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <BrowserRouter >
        <OuterWrapper>
          <NavBar />

          <InnerWrapper>
            <Switch>
              <Route exact path="/"> <HomePage /> </Route>
              <Route path="/noel">  </Route>
              <Route path="/projet">  </Route>
              <Route path="/artistes">  </Route>
              <Route path="/contact"> <Contact /> </Route>
            </Switch>
          </InnerWrapper>

          <Footer />
        </OuterWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

// Wrapper for whole react app
const OuterWrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100%;
  width: 100%;
`

// Wrapper for page content, without header/footer
const InnerWrapper = styled.div`
    width: 100%;
    flex: 1; // take remaining vertical space in page
`

const GlobalStyles = createGlobalStyle<{ theme: typeof theme }>`

  * {
    box-sizing: border-box;
    min-width: 0;
    min-height: 0;
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
  }

  // HTML root
  :root {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.mainText};
    height: 100%;
    width: 100%;
  }

  // Page root (react)
  #root {
    height: 100%;
    width: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }
`

export default App;
