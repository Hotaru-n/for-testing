import Header from "./components/Header/Header";
import HehMda from "./components/HehMda";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { cardInfo } from "./data";

function App() {
  const [heh] = useState(cardInfo);

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
              marginLeft: '1rem'
            }}
          >
            Книгусы:
          </h1>
          <ul className="container">
            {heh.map((item) => (
              <HehMda
                key={item.id}
                title={item.title}
                author={item.author}
                summ={item.summ}
              />
            ))}
          </ul>
        </section>

        <section style={{
            textAlign: 'center',
          }} >
          <h1
          >MESSAGE</h1>
          <p>
            ёбаный рот этого git-казино блядь
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
