import BookAuthorsContainer from "./bookAuthorsContainer";
import BookCover from "./bookCover.component";
import BookShelfChanger from "./bookShelfChanger.component";
import BookTitle from "./bookTitle.component";
const Book = ({ shelfBook }) => {
  const { title, authors, imageLinks } = shelfBook;
  console.log(shelfBook);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <BookCover bookCover={imageLinks.thumbnail} />
          <BookShelfChanger />
        </div>
        <BookTitle title={title} />
        <BookAuthorsContainer authors={authors} />
      </div>
    </li>
  );
};

export default Book;
