const BookShelfTitle = ({ shelfTitle }) => {
  return (
    <h2 className="bookshelf-title">{shelfTitle.replace(/([A-Z])/g, " $1")}</h2>
  );
};

export default BookShelfTitle;
