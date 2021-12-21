import BooksContainer from "./booksContainer.component";
import BookShelfTitle from "./bookShelfTitle.component";

const BookShelfContainer = ({ shelfsData, shelfs }) => {
  return (
    <div className="bookshelf">
      <BookShelfTitle shelfTitle={shelfsData[0]} />
      <BooksContainer
        shelfs={shelfs}
        pageType="home"
        shelfBooks={shelfsData[1]}
      />
    </div>
  );
};

export default BookShelfContainer;
