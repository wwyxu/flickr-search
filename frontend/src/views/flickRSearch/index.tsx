import React, { useEffect, useState } from "react";
import Pictures from "./pictures";
import Search from "./search";
import { FLICKR_SEARCH } from "src/constants";
import API from "src/services/api";

const FlickrSearch = ({setAuth}) => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [pictures, setPictures] = useState<string[]>([]);

  useEffect(() => {
    getPictures();
  }, [])

  const getPictures = async () => {
    try {
      const getPics: string[] = await API.flickr.getPictures(searchWord)

      setPictures(getPics);
    } catch (error) {
      console.log(error);
    }
  }

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button className="btn btn-danger logout-btn" type="button" onClick={(e) => logout(e)}>
        Logout
      </button>
      <h1 className="text-center mb-0 mt-2">{FLICKR_SEARCH}</h1>
      <div className="img-container">
        <Search search={getPictures} searchWord={searchWord} setSearchWord={setSearchWord} />
        <main>
          <Pictures pictures={pictures} />
        </main>
      </div>
    </>
  )
};

export default FlickrSearch;
