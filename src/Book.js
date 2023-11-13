import React from "react";
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <Image img={img} title={title} />
      <Title title={title} author={author} />
      <Author author={author} />
    </article>
  );
};

const Image = ({ img, title }) => <img src={img} alt={title} />;
const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

const Author = ({ author }) => <h4>{author} </h4>;
export default Book;
