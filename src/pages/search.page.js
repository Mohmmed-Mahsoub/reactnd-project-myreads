import BooksContainer from "../components/booksContainer.component";
import CloseSearch from "../components/closeSearch.component";
import SearchInput from "../components/searchInput.component";

const Search = () => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <CloseSearch />
        <SearchInput />
      </div>
      <BooksContainer pageType="search" />
    </div>
  );
};

export default Search;
