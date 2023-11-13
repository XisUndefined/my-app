import React from "react";
import ReactDOM from "react-dom/client";
import books from "./books";
import "./index.css";
import Book from "./Book";

function BookList({ books }) {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList books={books} />);
