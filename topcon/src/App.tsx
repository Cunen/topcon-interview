import React from "react";
import styled from "styled-components";
import "./App.css";
import Input from "./components/Input";
import Navbar from "./components/Navbar";

function App() {
  const [words] = React.useState<string[]>([]);

  return <Wrapper>
    <Navbar />
    <Input words={words} />
  </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  padding: 16px;
  background-color: #f1f1f1;
`;

export default App;
