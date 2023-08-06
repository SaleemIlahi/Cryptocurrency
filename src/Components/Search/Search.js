import { useState, useContext } from "react";
import "./search.css";
import { searchCoinApi } from "../../api";
import { TableContext } from "../../Context/tableContext";

const Search = () => {
  const { tableDispatch } = useContext(TableContext);
  const [search, setSearch] = useState("");
  const searchCoin = () => {
    if (search !== "") {
      searchCoinApi(search).then((el) => {
        tableDispatch({ type: "TABLE_DATA", data: el.data.coins });
      });
    }
  };

  const SearchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search_container">
      <input
        type="text"
        onChange={SearchHandler}
        value={search}
        placeholder="Search coins"
      />
      <button onClick={searchCoin}>Search</button>
    </div>
  );
};

export default Search;
