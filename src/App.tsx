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
        // backgroundImage: `url("https://sun9-28.userapi.com/s/v1/ig2/BmYC5kCNn7aPEf1T1HOPckNCYVlojVzxg5SWR07wS0kRJFmJi5dOv7STMwiAbV4wyBDcWtCMaI-yu24CTt4tVlXD.jpg?quality=96&as=32x16,48x23,72x35,108x53,160x78,240x117,360x176,480x234,540x264,640x312,720x352,1080x527,1280x625,1440x703,2048x1000&from=bu&u=GUyYz_8846lVyPOcceyFyikJF9iQYbNcD2cOFDNak8k&cs=2048x1000")`,
       
        backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e30c315-b987-4266-9f49-3c55f318ee4e/dbzkew5-bbb0fd40-adf7-4e50-8430-eb4717c3fb54.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlMzBjMzE1LWI5ODctNDI2Ni05ZjQ5LTNjNTVmMzE4ZWU0ZVwvZGJ6a2V3NS1iYmIwZmQ0MC1hZGY3LTRlNTAtODQzMC1lYjQ3MTdjM2ZiNTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PWztA6nIkElDO9qKU5kvuX8sYg-30vtLg-ey3IZWGZM")`,

        
        // height: 1080,
        backgroundSize: "contain",
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
