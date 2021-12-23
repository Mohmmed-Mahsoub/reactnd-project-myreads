import BooksContainer from "./booksContainer.component";
import BookShelfTitle from "./bookShelfTitle.component";

const BookShelfContainer = ({
  shelfsData,
  shelfs,
  rerenderVal,
  rerenderWay,
}) => {
  return (
    <div className="bookshelf">
      <BookShelfTitle shelfTitle={shelfsData[0]} />
      <BooksContainer
        shelfs={shelfs}
        shelfBooks={shelfsData[1]}
        rerenderWay={rerenderWay}
        rerenderVal={rerenderVal}
      />
    </div>
  );
};

export default BookShelfContainer;
