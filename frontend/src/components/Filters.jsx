function Filters({ status, setStatus }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <button onClick={() => setStatus(null)}>All</button>
      <button onClick={() => setStatus("read")}>Read</button>
      <button onClick={() => setStatus("reading")}>Reading</button>
      <button onClick={() => setStatus("want")}>Want</button>
    </div>
  );
}

export default Filters;
