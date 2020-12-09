import React, { useState, useEffect } from "react";
import axios from "axios";
import PageNation from "../Components/pageNation";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPosts, setNumberOfPosts] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        // console.log(response);
      } catch (err) {
        setError(err);
      }
    };

    fetchPosts();
  }, []);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setPageNumber(pageNumber);
  };

  const lastIndexOfPage = pageNumber * numberOfPosts;
  const firstIndexOfPage = lastIndexOfPage - numberOfPosts;

  return (
    <div>
      {!error &&
        posts.slice(firstIndexOfPage, lastIndexOfPage).map((post) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      <PageNation
        totalPosts={posts.length}
        numberOfPosts={numberOfPosts}
        paginate={paginate}
      />
    </div>
  );
};

export default Posts;
