import React, { useState, useEffect } from "react";
import Books from "../Components/books";

const BookList = (props) => {
  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <>
      <input type="text" value={query} onChange={handleOnChange} />
      <Books query={query} pageNumber="1" />
    </>
  );
};

export default BookList;
