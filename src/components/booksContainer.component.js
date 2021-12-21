import Book from "./book.component";

const BooksContainer = ({ pageType, shelfBooks }) => {
  return (
    <div
      className={`${
        pageType === "search" ? "search-books-results" : "bookshelf-books"
      }`}
    >
      <ol className="books-grid">
        {shelfBooks.map((shelfBook, index) => {
          return <Book shelfBook={shelfBook} key={index} />;
        })}
      </ol>
    </div>
  );
};

export default BooksContainer;