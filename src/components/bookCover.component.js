const BookCover = ({ bookCover }) => {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${bookCover})`,
      }}
    />
  );
};

export default BookCover;
