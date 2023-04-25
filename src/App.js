import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ArrowToTop } from "./elements/ArrowToTop";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Spacegrotesk";
    src: url("https://assets.website-files.com/622fbc5a718ac3417fcd3d75/622fc8f87fd5f314f8fc8126_SpaceGrotesk-Medium.woff")
      format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Spacegrotesk";
    src: url("https://assets.website-files.com/622fbc5a718ac3417fcd3d75/622fc8f89ce5a8375d74de96_SpaceGrotesk-Bold.woff")
      format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Spacegrotesk";
    src: url("https://assets.website-files.com/622fbc5a718ac3417fcd3d75/622fc8f87653c0225d638848_SpaceGrotesk-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.4em;
    font-family: "Spacegrotesk", sans-serif;
    background-color: rgb(29, 29, 29);
    color: white;

    @media screen and (min-width: 768px) {
        line-height: 1.65em;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid rgb(92, 91, 87);
  }
`;
const Wrapper = styled.div`
  position: relative;
`;

const Main = styled.main`
  position: relative;
  margin-top: 8vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <ArrowToTop />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
