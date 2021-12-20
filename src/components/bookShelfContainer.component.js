import BooksContainer from "./booksContainer.component";
import BookShelfTitle from "./bookShelfTitle.component";

const BookShelfContainer = () => {
  return (
    <div className="bookshelf">
      <BookShelfTitle />
      <BooksContainer />
    </div>
  );
};

export default BookShelfContainer;
