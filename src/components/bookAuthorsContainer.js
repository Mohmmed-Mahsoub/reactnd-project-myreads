import BookAuthor from "./BookAuthor.Component";

const BookAuthorsContainer = ({ authors }) => {
  return (
    <div className="book-authors">
      {authors.map((author, index) => {
        return <BookAuthor author={author} key={index} />;
      })}
    </div>
  );
};

export default BookAuthorsContainer;
