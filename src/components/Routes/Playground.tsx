import { Link } from "react-router";
import Button from "../Button/Button";
import styled from "styled-components";
import Counter from "../Counter";
import NivoPi from "../NivoPi/NivoPi";
import CardForm from "../CardForm/CardForm";
import HehMda from "../HehMda";
import { useState } from "react";
import LowdbTest from "../LowdbTest";

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

const TestContainer = styled.div`
  height: 1000px;
  display: flex;
  margin: 0 2rem;
  justify-content: start;
  // align-items: center;
  gap: 50px;
`;

export default function Playground() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    price: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log("Submited data:", formData);

  // const [nameValue, setNameValue] = useState("");
  // console.log(nameValue);

  // const handleNameChange = (event) => {
  //   setNameValue(event.target.value);
  // };

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
        ></section>
        <TestContainer>
          <NivoPi />
          <CardForm
            value={formData}
            onChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <div
            style={{
              height: "500px",
              width: "500px",
            }}
          >
            <h2>Redux Complete Tutorial</h2>
            <Counter />
          </div>
          <section>
            <ul className="container">
              <HehMda
                key={14}
                title={formData.name}
                author={formData.author}
                price={formData.price}
                summ={formData.description}
              />
            </ul>
          </section>
        </TestContainer>
        <div>
          <LowdbTest />
        </div>
      </main>
    </div>
  );
}
