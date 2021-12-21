import Loader from "../components/loader";
import OpenSearch from "../components/openSearch.component";
import BookShelfContainer from "./../components/bookShelfContainer.component";

const Home = ({ isBooksDataFetched, booksData }) => {
  const shelfs = [
    "none",
    ...new Set(
      booksData.map((book) => {
        return book.shelf;
      })
    ),
  ];
  let shelfsByBooks = {};
  booksData.forEach((book) => {
    const bookShelf = book.shelf;

    if (shelfsByBooks[bookShelf]) {
      shelfsByBooks[bookShelf].push(book);
    } else {
      shelfsByBooks[bookShelf] = [book];
    }
  });
  shelfsByBooks = Object.entries(shelfsByBooks);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {isBooksDataFetched ? (
            shelfsByBooks.map((shelfsData, index) => {
              return (
                <BookShelfContainer
                  shelfs={shelfs}
                  shelfsData={shelfsData}
                  key={index}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <OpenSearch />
    </div>
  );
};

export default Home;
