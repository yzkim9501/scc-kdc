import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Algorithm from "./components/Algorithm";
import NoCodeAIApp from "./components/NoCodeAIApp";
import BackButton from "./components/BackButton";
import GlobalStyle from "./GlobalStyle";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  box-sizing: border-box;
`;

function AppContent() {
  const location = useLocation();

  return (
    <AppContainer>
      {location.pathname !== "/" && <BackButton />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algorithm" element={<Algorithm />} />
        <Route path="/nocode-ai-app" element={<NoCodeAIApp />} />
      </Routes>
    </AppContainer>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContent />
    </Router>
  );
}

export default App;
