import OpenSearch from "../components/openSearch.component";
import BookShelfContainer from "./../components/bookShelfContainer.component";

const Home = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {[0, 1, 2].map((el, index) => {
            return <BookShelfContainer key={index} />;
          })}
        </div>
      </div>
      <OpenSearch />
    </div>
  );
};

export default Home;
