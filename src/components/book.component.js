import BookAuthorsContainer from "./bookAuthorsContainer";
import BookCover from "./bookCover.component";
import BookShelfChanger from "./bookShelfChanger.component";
import BookTitle from "./bookTitle.component";
const Book = ({ shelfBook, shelfs, rerenderVal, rerenderWay }) => {
  const { title, authors, imageLinks, shelf, id } = shelfBook;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <BookCover bookCover={imageLinks.thumbnail} />
          <BookShelfChanger
            bookId={id}
            shelfs={shelfs}
            shelf={shelf}
            setRerender={rerenderWay}
            rerenderVal={rerenderVal}
          />
        </div>
        <BookTitle title={title} />
        <BookAuthorsContainer authors={authors} />
      </div>
    </li>
  );
};

export default Book;
