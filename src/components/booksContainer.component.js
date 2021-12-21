import Book from "./book.component";

const BooksContainer = ({ pageType, shelfBooks, shelfs }) => {
  return (
    <div
      className={`${
        pageType === "search" ? "search-books-results" : "bookshelf-books"
      }`}
    >
      <ol className="books-grid">
        {shelfBooks.map((shelfBook, index) => {
          return <Book shelfs={shelfs} shelfBook={shelfBook} key={index} />;
        })}
      </ol>
    </div>
  );
};

export default BooksContainer;
