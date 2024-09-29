export default function HehMda(props) {
  return (
    <li>
      <img src="/images/anime.png" alt="anime" />
      <h2>{props.title}</h2>
      <p> Автор: {props.author}</p>
      <strong>
        <h3>Описание:</h3>
      </strong>
      {props.summ}
    </li>
  );
}
