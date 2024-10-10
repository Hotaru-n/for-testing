import { styled } from "styled-components";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0px solid #ccc;
  background-color: #333;
  background: ;
`;

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <HeaderContainer>
        <h3> Goyda! </h3>

        <span>Кто прочитал тот {"пидар".toUpperCase()}</span>
        <FaShoppingBag
          onClick={() => setCartOpen((cartOpen) => !cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"} `}
        />
      </HeaderContainer>
    </div>
  );
}
