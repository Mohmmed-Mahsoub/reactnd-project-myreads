import Book from "./book.component";
const SearchResultsContainer = ({
  searchResults,
  rerenderVal,
  rerenderWay,
  booksShelvesData,
}) => {
  const shelfs = ["none", "currentlyReading", "wantToRead", "read"];
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchResults &&
          Array.isArray(searchResults) &&
          searchResults.length > 0 &&
          searchResults.map((searchResult, index) => {
            return (
              <Book
                key={index}
                searchResult={searchResult}
                shelfs={shelfs}
                rerenderWay={rerenderWay}
                rerenderVal={rerenderVal}
                booksShelvesData={booksShelvesData}
              />
            );
          })}
      </ol>
    </div>
  );
};

export default SearchResultsContainer;
