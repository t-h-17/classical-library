import { setTextStatus } from "../api";
import { useState } from "react";

function TextItem({ text, onStatusChange }) {
  const [status, setStatus] = useState(text.status);

  const handleClick = async newStatus => {
    const updatedStatus = status === newStatus ? null : newStatus;
    //to update the button color immediately without waiting for the server response
    setStatus(updatedStatus);

    //to update the status in the database
    await setTextStatus(text.id, updatedStatus);
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
        <button style={{ backgroundColor: status === "read" ? "lightgray" : "white" }} onClick={() => handleClick("read")}>Read</button>
        <button style={{ backgroundColor: status === "reading" ? "lightgray" : "white" }} onClick={() => handleClick("reading")}>Reading</button>
        <button style={{ backgroundColor: status === "want" ? "lightgray" : "white" }} onClick={() => handleClick("want")}>Want</button>
      </div>
    </div>
  );
}

export default TextItem;
