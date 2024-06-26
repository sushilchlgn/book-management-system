import React, { useState } from "react";
import "./AddBook.css";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [year, setYear] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, isbn, year);
  };
  return (
    <div className="book-container">
      <h1 className="title">Add new Book</h1>

      <form className="content">
        <div className="form-item">
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>ISBN</label>
          <input
            name="isbn"
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Year</label>
          <input
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="number"
          />
        </div>
        <button
          className="submit-button"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
