import React from "react";

const listStyle = {
  listStyleType: "none",
  display: "inline",
  padding: "10px"
};

const PageNation = ({ totalPosts, numberOfPosts, paginate }) => {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(totalPosts / numberOfPosts); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <ul>
      {pageNumber.map((page) => {
        // console.log(page);
        return (
          <li key={page} style={listStyle}>
            <a href="!#" onClick={(e) => paginate(e, page)}>
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageNation;
