function Filters({ status, setStatus }) {
  return (
    <div style={{ margin: "8px 0" }}>
      <button style={{marginRight: "2px", height: "32px", backgroundColor: status === null ? "lightGray" : "white", fontFamily: "Times New Roman"}} onClick={() => setStatus(null)}>All</button>
      <button style={{marginRight: "2px", height: "32px", backgroundColor: status === "read" ? "lightGray" : "white", fontFamily: "Times New Roman"}} onClick={() => setStatus("read")}>Read</button>
      <button style={{marginRight: "2px", height: "32px", backgroundColor: status === "reading" ? "lightGray" : "white", fontFamily: "Times New Roman"}} onClick={() => setStatus("reading")}>Reading</button>
      <button style={{marginRight: "2px", height: "32px", backgroundColor: status === "want" ? "lightGray" : "white", fontFamily: "Times New Roman"}} onClick={() => setStatus("want")}>Want</button>
    </div>
  );
}

export default Filters;
