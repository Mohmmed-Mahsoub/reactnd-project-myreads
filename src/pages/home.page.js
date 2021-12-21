import Loader from "../components/loader";
import OpenSearch from "../components/openSearch.component";
import BookShelfContainer from "./../components/bookShelfContainer.component";

const Home = ({ isBooksDataFetched, booksData }) => {
  /* const shelfs = new Set(
     booksData.map((book) => {
      return book.shelf.toLowerCase();
    }) 
  );
  console.log("shelfs", shelfs); */
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
              return <BookShelfContainer shelfsData={shelfsData} key={index} />;
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
