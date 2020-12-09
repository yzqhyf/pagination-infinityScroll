import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = ({ query, pageNumber }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log(query);
    // console.log(books);

    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://openlibrary.org/search.json",
          {
            params: {
              q: query,
              page: pageNumber
            },
            cancelToken: source.token
          }
        );
        setLoading(false);
        console.log(response);
        // setBooks((prevBooks) => [
        //   ...new Set([...prevBooks, ...response.data.docs])
        // ]);
        setBooks([...new Set(response.data.docs)]);
      } catch (err) {
        setLoading(false);
        if (axios.isCancel(err)) {
          console.log("request is canceled");
        } else {
          setError(err);
        }
      }
    };

    fetchBooks();

    return () => {
      source.cancel();
    };
  }, [query, pageNumber]);

  return (
    <div>
      {books.length !== 0 &&
        books.map((book) => {
          return <div key={book.cover_i}>{book.title}</div>;
        })}
    </div>
  );
};

export default Books;
