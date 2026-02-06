import { useEffect, useState } from "react";
import { fetchLibrary } from "./api";
import TextList from "./components/TextList";
import Filters from "./components/Filters";

function App() {
  const [texts, setTexts] = useState([]);
  const [status, setStatus] = useState(null);

  const loadTexts = async () => {
    const data = await fetchLibrary(status);
    setTexts(data);
  };

  useEffect(() => { loadTexts(); }, [status]);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Classical Library</h1>

      <Filters status={status} setStatus={setStatus} />

      <TextList texts={texts} refresh={loadTexts} />
    </div>
  );
}

export default App;
