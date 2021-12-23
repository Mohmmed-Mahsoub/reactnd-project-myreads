import CloseSearch from "../components/closeSearch.component";
import SearchInput from "../components/searchInput.component";
import SearchResultsContainer from "../components/searchResultsContainer.component";

const Search = () => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <CloseSearch />
        <SearchInput />
      </div>
      <SearchResultsContainer />
    </div>
  );
};

export default Search;
