import { styled } from "styled-components";
import "./Header.css";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: ;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h3> Goyda! </h3>

      <span>Кто прочитал тот {"пидар".toUpperCase()}</span>
    </HeaderContainer>
  );
}
