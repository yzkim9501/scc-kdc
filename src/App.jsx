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
import DataMarketing from "./components/DataMarketing";
import DataAnalysis from "./components/DataAnalysis";
import SQL from "./components/SQL";
import WebDevelopment from "./components/WebDevelopment";
import ChatGPT from "./components/ChatGPT";
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
        <Route path="/data-marketing" element={<DataMarketing />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
        <Route path="/sql" element={<SQL />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/chatgpt" element={<ChatGPT />} />
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
