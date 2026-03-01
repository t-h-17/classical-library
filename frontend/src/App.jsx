import { useEffect, useState } from "react";
import { fetchLibrary } from "./api";
import TextList from "./components/TextList";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";
import Sort from "./components/Sort";

function App() {
  const [texts, setTexts] = useState([]);
  const [status, setStatus] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("author");
  const [direction, setDirection] = useState("asc");

  const loadTexts = async () => {
    const data = await fetchLibrary(status);
    setTexts(data);
  };

  useEffect(() => {
    let url = "http://localhost:3001/library";
    document.body.style.backgroundColor = "#E0C9A6";

    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (search) params.append("search", search);
    if (sort) params.append("sort", sort);
    if (direction) params.append("direction", direction);

    if (params.toString()) {
      url += "?" + params.toString();
    }

    fetch(url)
     .then(res => res.json())
     .then(data => setTexts(data));
  }, [status, search, sort, direction]);

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}>

      <h1 style={{fontFamily: "Papyrus"}}>Classical Library</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <Filters status={status} setStatus={setStatus} />

      <Sort style={{margin: "0"}} sort={sort} setSort={setSort} direction={direction} setDirection={setDirection} />

      <TextList texts={texts} refresh={loadTexts}/>
    </div>
  );
}

export default App;
