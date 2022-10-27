import React from "react";
import { SEARCH } from "src/constants"

interface Search {
  search: any;
  searchWord: string;
  setSearchWord: Function;
}

const Search = ({search, searchWord, setSearchWord}: Search) => {
  const onSubmit = (e) => {
    e.preventDefault(); 
    search();
  }

  return (
    <form className="search-container d-flex" onSubmit={onSubmit}>
      <input type="text" className="form-control" placeholder={SEARCH} value={searchWord} onChange={(e) => {setSearchWord(e.target.value)}} />
      <button type="button" className="btn btn-primary ml-2" onClick={search}>{SEARCH}</button>
    </form>
  )
};

export default Search;
