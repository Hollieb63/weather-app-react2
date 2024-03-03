import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <footer>
        <smaller>
          <a href="">
            Open Source Code
          </a>{" "}
          byEmily Short. Hosted on{" "}
          <a href="">Netlify.</a>
        </smaller>
      </footer>
    </div>
  );
}