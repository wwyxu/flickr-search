import React, { useEffect, useState } from "react";
import Pictures from "./pictures";
import Search from "./search";
import API from "src/services/api";

const FlickrPictures = () => {
  const [searchWord, setSearchWord] = useState("");
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getPictures();
  }, [])

  const getPictures = async () => {
    try {
      const getPics = await API.getPictures(searchWord)

      setPictures(getPics);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="img-container">
      <Search search={getPictures} searchWord={searchWord} setSearchWord={setSearchWord} />
      <Pictures pictures={pictures} />
    </div>
  )
};

export default FlickrPictures;
