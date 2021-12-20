import BookAuthorsContainer from "./bookAuthorsContainer";
import BookCover from "./bookCover.component";
import BookShelfChanger from "./bookShelfChanger.component";
import BookTitle from "./bookTitle.component";
const Book = () => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <BookCover />
          <BookShelfChanger />
        </div>
        <BookTitle />
        <BookAuthorsContainer />
      </div>
    </li>
  );
};

export default Book;
