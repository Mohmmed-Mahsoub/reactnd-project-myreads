import CloseSearch from "../components/closeSearch.component";
import SearchInput from "../components/searchInput.component";
import SearchResultsContainer from "../components/searchResultsContainer.component";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";

const Search = ({ rerenderVal, rerenderWay, booksShelvesData }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    try {
      const delayDebounceFn = setTimeout(async () => {
        if (query && query !== "") {
          const searchResultsData = await BooksAPI.search(query.trim());
          setSearchResults(searchResultsData);
        } else {
          setSearchResults([]);
        }
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    } catch (error) {
      console.log(error);
    }
  }, [query]);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <CloseSearch />
        <SearchInput query={query} setQuery={setQuery} />
      </div>
      <SearchResultsContainer
        searchResults={searchResults}
        rerenderWay={rerenderWay}
        rerenderVal={rerenderVal}
        booksShelvesData={booksShelvesData}
      />
    </div>
  );
};

export default Search;
