import { useEffect, useState } from "react";
import { fetchLibrary } from "./api";
import TextList from "./components/TextList";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";

function App() {
  const [texts, setTexts] = useState([]);
  const [status, setStatus] = useState(null);
  const [search, setSearch] = useState("");

  const loadTexts = async () => {
    const data = await fetchLibrary(status);
    setTexts(data);
  };

  useEffect(() => {
    let url = "http://localhost:3001/library";

    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (search) params.append("search", search);

    if (params.toString()) {
      url += "?" + params.toString();
    }

    fetch(url)
     .then(res => res.json())
     .then(data => setTexts(data));
  }, [status, search]);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Classical Library</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <Filters status={status} setStatus={setStatus} />

      <TextList texts={texts} refresh={loadTexts} />
    </div>
  );
}

export default App;
