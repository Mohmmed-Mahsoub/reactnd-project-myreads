import { useEffect, useState } from "react";
const BookShelfChanger = ({ shelf, shelfs }) => {
  const [currentShelf, setCurrentShelf] = useState("");
  useEffect(() => {
    currentShelf ? setCurrentShelf(shelf) : setCurrentShelf("none");
  });

  return (
    <div className="book-shelf-changer">
      <select value={currentShelf}>
        <option value="move" disabled>
          Move to...
        </option>
        {shelfs.map((shelfValue) => {
          let shelfTxt = shelfValue.replace(/([A-Z])/g, " $1"); //convert camel case to string
          return (
            <option
              className={currentShelf == shelfValue && "selected"}
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
