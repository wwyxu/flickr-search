import React from "react";

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
      <input type="text" className="form-control" placeholder="Search Pics" value={searchWord} onChange={(e) => {setSearchWord(e.target.value)}} required />
      <button type="button" className="btn btn-primary ml-2" onClick={search}>Search</button>
    </form>
  )
};

export default Search;
