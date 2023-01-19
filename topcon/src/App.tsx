import React from "react";
import styled from "styled-components";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [words] = React.useState<string[]>([]);

  return (
    <Wrapper>
      <Input words={words} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 16px;
  background-color: #f1f1f1;
`;

export default App;
