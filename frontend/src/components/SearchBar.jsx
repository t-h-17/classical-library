function SearchBar({ search, setSearch }) {
    return (
        <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
                padding: "8px 5%", textAlign: "center", fontFamily: "Times New Roman", border: "1px solid black", borderRadius: "4px"
            }}
        />
    );
};

export default SearchBar;