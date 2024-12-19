import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import Playground from "./components/Routes/Playground.tsx";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pg" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
