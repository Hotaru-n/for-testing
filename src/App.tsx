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
        backgroundImage: `url("https://sun9-28.userapi.com/s/v1/ig2/BmYC5kCNn7aPEf1T1HOPckNCYVlojVzxg5SWR07wS0kRJFmJi5dOv7STMwiAbV4wyBDcWtCMaI-yu24CTt4tVlXD.jpg?quality=96&as=32x16,48x23,72x35,108x53,160x78,240x117,360x176,480x234,540x264,640x312,720x352,1080x527,1280x625,1440x703,2048x1000&from=bu&u=GUyYz_8846lVyPOcceyFyikJF9iQYbNcD2cOFDNak8k&cs=2048x1000")`,

        height: 1080,
        backgroundSize: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <main>
        <section>
          <h1
            style={{
              fontSize: "2.5rem",
            }}
          >
            Чтение для всей семьи:
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
