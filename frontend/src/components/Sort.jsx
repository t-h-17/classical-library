import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Sort({ sort, setSort, direction, setDirection }) {
    return (
        <div>
            <select name='sort' value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value='author'>Author</option>
                <option value='date'>Date</option>
                <option value='title'>Text</option>
            </select>
            <button onClick={() => setDirection(direction === "asc" ? "desc" : "asc")}>{direction === "asc" ? <FaArrowDown /> : <FaArrowUp />}</button>
        </div>
    );
}

export default Sort;