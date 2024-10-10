import Button from "./Button/Button";

export default function HehMda(props) {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <li>
      <img src="/images/anime.png" alt="anime" />
      <h3>{props.title}</h3>
      <p> Автор: {props.author}</p>
      <div style={{ marginBottom: "1rem" }}>
        <span
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginRight: "1rem",
          }}
        >
          {props.price} miu
        </span>
        <Button onClick={handleClick}>mau</Button>
      </div>
      {props.summ}
    </li>
  );
}
