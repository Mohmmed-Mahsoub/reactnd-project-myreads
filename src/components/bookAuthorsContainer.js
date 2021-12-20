import BookAuthor from "./BookAuthor.Component";

const BookAuthorsContainer = () => {
  return (
    <div className="book-authors">
      {[0].map((el, index) => {
        return <BookAuthor key={index} />;
      })}
    </div>
  );
};

export default BookAuthorsContainer;
