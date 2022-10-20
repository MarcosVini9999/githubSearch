import React from "react";
import "../../style.css";
import iconSearch from "../../assets/iconSearch.svg";

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
        <img src={iconSearch} alt="search icon" />
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
