import { setTextStatus } from "../api";

function TextItem({ text, onStatusChange }) {
  const handleClick = async status => {
    await (text.status === status ? setTextStatus(text.id, null) : setTextStatus(text.id, status));
    onStatusChange();
  };

  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "8px 0" }}>
      <div>
        <strong>{text.title}</strong>
      </div>
      <div>
        {text.author} — { (text.city != null) ? ( `${text.city}, ${text.country}` ) : text.country }
      </div>
      <div>
        {text.date != null ? (text.date < 0 ? `${-text.date} BCE` : `${text.date} CE`) : "Unknown Date"}
      </div>

      <div style={{ marginTop: "6px" }}>
        <button style={{ backgroundColor: text.status === "read" ? "lightgray" : "white" }} onClick={() => handleClick("read")}>Read</button>
        <button style={{ backgroundColor: text.status === "reading" ? "lightgray" : "white" }} onClick={() => handleClick("reading")}>Reading</button>
        <button style={{ backgroundColor: text.status === "want" ? "lightgray" : "white" }} onClick={() => handleClick("want")}>Want</button>
      </div>
    </div>
  );
}

export default TextItem;
