import styled from "styled-components";

interface Props {
  words: string[];
}

function Input({ words }: Props) {
  return (
    <Wrapper>
      <Words>
        {words.map((word, i) => {
          return word;
        })}
        {words.length < 1 && <NoWords>No words</NoWords>}
      </Words>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 640px;
  height: 320px;
  padding: 8px;
  background-color: white;
  display: flex;
`;

const Words = styled.div`
  display: flex;
  flex: 1;
  height: 88px;
`;

const NoWords = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  padding: 8px 16px 8px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #f1f1f1;
`;

export default Input;
