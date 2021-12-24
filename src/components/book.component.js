import BookAuthorsContainer from "./bookAuthorsContainer";
import BookCover from "./bookCover.component";
import BookShelfChanger from "./bookShelfChanger.component";
import BookTitle from "./bookTitle.component";
const Book = ({
  shelfBook,
  shelfs,
  rerenderVal,
  rerenderWay,
  searchResult,
  booksShelvesData,
}) => {
  if (shelfBook) {
    var { title, authors, imageLinks, shelf, id } = shelfBook;
  } else {
    var { title, authors, imageLinks, shelf, id } = searchResult;
  }

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
            booksShelvesData={booksShelvesData}
          />
        </div>
        <BookTitle title={title} />
        <BookAuthorsContainer authors={authors} />
      </div>
    </li>
  );
};

export default Book;
