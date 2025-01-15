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
            Fake Books:
          </h1>
          <div
            style={{
              marginLeft: "1rem",
              textAlign: "center",
            }}
          >
            <h2>Redux Complete Tutorial</h2>
            <Counter />

            <h4
              style={{
                marginBottom: "0px",
              }}
            >
              search:
            </h4>
            <input
              style={{
                height: "2rem",
                borderRadius: "8px",
                colorScheme: "normal",
                fontSize: "1rem",
              }}
              placeholder="filter"
              type="text"
              value={filterText}
              onChange={(event) => changeFilter(event.target.value)}
            />
          </div>

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
                    price={item.price}
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
          <p> вау мяу</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
