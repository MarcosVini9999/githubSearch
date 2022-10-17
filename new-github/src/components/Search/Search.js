import React from "react";

const Search = (props) => {
  const [search, setSearch] = React.useState("");

  const buscaInput = (event) => {
    setSearch(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    props.info(search);
    console.log(search);
  };
  return (
    <React.Fragment>
      <form onSubmit={submitSearch}>
        <input
          id="search"
          type="search"
          onChange={buscaInput}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </React.Fragment>
  );
};
export default Search;
