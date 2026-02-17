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
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Classical Library</h1>

      <SearchBar search={search} setSearch={setSearch} />
      
      <Sort sort={sort} setSort={setSort} direction={direction} setDirection={setDirection} />

      <Filters status={status} setStatus={setStatus} />

      <TextList texts={texts} refresh={loadTexts} />
    </div>
  );
}

export default App;
