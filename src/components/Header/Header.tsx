import { styled } from "styled-components";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";

import Button from "../Button/Button";

const HeaderContainer = styled.header`
  height: 80px;
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

  function handleClick() {
    console.log("clicked");
  }

  return (
    <div>
      <HeaderContainer>
        <h3> React </h3>

        <Link to="/pg">
          <Button onClick={handleClick}>Routing test</Button>
        </Link>

        <FaShoppingBag
          onClick={() => setCartOpen((cartOpen) => !cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"} `}
        />

        {cartOpen && (
          <div className="shop-cart">
            <p>Don't eat cats</p>
          </div>
        )}
      </HeaderContainer>
    </div>
  );
}
