import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Sort({ sort, setSort, direction, setDirection }) {
    return (
        <div style={{ height: "32px", marginBottom: "8px"}}>
            <select style={{height: "100%", border: "1px solid black", borderRight: "0px", backgroundColor: "lightGray", fontFamily: "Times New Roman"}} name='sort' value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value='author'>Author</option>
                <option value='date'>Date</option>
                <option value='title'>Text</option>
            </select>
            <button style={{ height: "100%", border: "1px solid black", borderLeft: "0px", backgroundColor: "lightGray"}} onClick={() => setDirection(direction === "asc" ? "desc" : "asc")}>{direction === "asc" ? <FaArrowDown /> : <FaArrowUp />}</button>
        </div>
    );
}

export default Sort;