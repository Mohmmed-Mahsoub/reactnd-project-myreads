import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";

const BookShelfChanger = ({
  shelf,
  shelfs,
  bookId,
  setRerender,
  rerenderVal,
}) => {
  const [currentShelf, setCurrentShelf] = useState("");
  useEffect(() => {
    currentShelf ? setCurrentShelf(shelf) : setCurrentShelf("none");
  }, [currentShelf]);
  const handleChange = async (event) => {
    const bookIdToUpdate = { id: bookId };
    await BooksAPI.update(bookIdToUpdate, event.target.value);
    setRerender(!rerenderVal);
  };
  return (
    <div className="book-shelf-changer">
      <select value={currentShelf} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        {shelfs.map((shelfValue, index) => {
          let shelfTxt = shelfValue.replace(/([A-Z])/g, " $1"); //convert camel case to string
          return (
            <option
              key={index}
              className={currentShelf == shelfValue ? "selected" : ""}
              value={shelfValue}
            >
              {shelfTxt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BookShelfChanger;
