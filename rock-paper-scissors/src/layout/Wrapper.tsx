import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 700px;
  margin: auto;
`;

function Wrapper({ children }: { children: React.ReactNode }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
