import React from "react";
import "../../style.css";
const Search = props => {
  const [search, setSearch] = React.useState("");
  const buscaInput = event => {
    setSearch(event.target.value);
  };

  const submitSearch = event => {
    event.preventDefault();
    props.onChange(search);
  };

  return (
    <div className="searchWrapper">
      <form onSubmit={submitSearch}>
        <input
          id="search"
          type="search"
          placeholder="User ID"
          onChange={buscaInput}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
