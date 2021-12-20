import Book from "./book.component";

const BooksContainer = ({ pageType }) => {
  return (
    <div
      className={`${
        pageType === "search" ? "search-books-results" : "bookshelf-books"
      }`}
    >
      <ol className="books-grid">
        {[0, 1].map((el, index) => {
          return <Book key={index} />;
        })}
      </ol>
    </div>
  );
};

export default BooksContainer;
