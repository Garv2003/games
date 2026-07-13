import { createContext, useState } from "react";
import Header from "./component/Header";
import styled from "styled-components";
import Wrapper from "./layout/Wrapper";
import Table from "./component/Table";
import Rules from "./component/Rules";

export const ScoreContext = createContext<{
  score: number;
  setScore: (score: number) => void;
}>({
  score: 0,
  setScore: () => {},
});

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  color: white;
  font-family: "Barlow Semi Condensed", sans-serif;

  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function App() {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  );
}

export default App;
