import Loader from "../components/loader";
import OpenSearch from "../components/openSearch.component";
import BookShelfContainer from "./../components/bookShelfContainer.component";

const Home = ({ isBooksDataFetched, booksData, rerenderVal, rerenderWay }) => {
  const shelfs = ["none", "currentlyReading", "wantToRead", "read"];
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
                  rerenderWay={rerenderWay}
                  rerenderVal={rerenderVal}
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
