import { Link } from "react-router";
import Button from "../Button/Button";
import styled from "styled-components";
import Counter from "../Counter";

const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  padding: 0 2rem;
  justify-content: start;
  align-items: center;
  gap: 25px;
  border-bottom: 0px solid #ccc;
  background-color: #333;
  background: ;
`;

export default function Playground() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div>
      <HeaderContainer>
        <h1>Playground</h1>

        <Link to="/">
          <Button onClick={handleClick}> Home </Button>
        </Link>
      </HeaderContainer>
      <main>
        <section
          style={{
            marginLeft: "1rem",
            textAlign: "center",
          }}
        >
          <h2>Redux Complete Tutorial</h2>
          <Counter />
        </section>
      </main>
    </div>
  );
}
