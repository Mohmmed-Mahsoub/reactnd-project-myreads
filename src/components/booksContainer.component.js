import Book from "./book.component";

const BooksContainer = ({
  pageType,
  shelfBooks,
  shelfs,
  rerenderVal,
  rerenderWay,
}) => {
  return (
    <div
      className={`${
        pageType === "search" ? "search-books-results" : "bookshelf-books"
      }`}
    >
      <ol className="books-grid">
        {shelfBooks &&
          shelfBooks.map((shelfBook, index) => {
            return (
              <Book
                shelfs={shelfs}
                shelfBook={shelfBook}
                key={index}
                rerenderWay={rerenderWay}
                rerenderVal={rerenderVal}
              />
            );
          })}
      </ol>
    </div>
  );
};

export default BooksContainer;
