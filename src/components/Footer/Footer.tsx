import "./Footer.css";

// import { styled } from "styled-components";

// const FooterContainer = styled.footer`
//   height: 50px;
//   display: flex;
//   padding: 0 2rem;
//   justify-content: space-between;
//   align-items: center;
//   background: rgb(76, 76, 76);
// `;

export default function Footer() {
  return (
    <div className="footer">
      <p>текстовый текст</p>
      <span> ещё текст, но с цифорками 123 </span>
    </div>
  );
}
