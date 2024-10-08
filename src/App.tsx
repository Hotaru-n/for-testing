import Counter from "./components/Counter";
import Header from "./components/Header/Header";
import HehMda from "./components/HehMda";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { cardInfo } from "./data";
import { useMemo } from "react";

function App() {
  const [heh] = useState(cardInfo);
  const [filterText, changeFilter] = useState("");
  console.log(filterText);

  const lowerCasedFilterText = useMemo(
    () => filterText.toLowerCase(),
    [filterText]
  );

  return (
    <div
      style={{
        backgroundImage: " url(/images/background.png) ",

        backgroundSize: "contain",
        // height: 1080,
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <main>
        <section>
          <h1
            style={{
              fontSize: "2.5rem",
              marginLeft: "1rem",
            }}
          >
            Книгусы:
          </h1>

          <h2>Redux Complete Tutorial</h2>
          <Counter />

          <h4
            style={{
              marginBottom: "0px",
            }}
          >
            search
          </h4>
          <input
            placeholder="filter"
            type="text"
            value={filterText}
            onChange={(event) => changeFilter(event.target.value)}
          />

          {/* <ul className="container">
  {heh
    .filter(({ title, author }) => new RegExp(filterText, 'i').test(title) || new RegExp(filterText, 'i').test(author))
    .map(({ id, title, author, summ }) => (
      <HehMda key={id} title={title} author={author} summ={summ} />
    ))}
</ul> */}

          <ul className="container">
            {heh.map((item) => {
              if (
                item.title.toLowerCase().includes(lowerCasedFilterText) ||
                item.author.toLowerCase().includes(lowerCasedFilterText)
              ) {
                return (
                  <HehMda
                    key={item.id}
                    title={item.title}
                    author={item.author}
                    summ={item.summ}
                  />
                );
              }
            })}
          </ul>
        </section>

        <section
          style={{
            textAlign: "center",
          }}
        >
          <h1>MESSAGE</h1>
          <p>ёбаный рот этого git-казино блядь!</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
