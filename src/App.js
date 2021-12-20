import "./App.css";
//import * as BooksAPI from "./BooksAPI";
import { useState } from "react";
import Search from "./pages/search.page";
import Home from "./pages/home.page";

function BooksApp() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */

  return (
    <div className="app">
      {showSearchPage ? (
        <Search setShowSearchPage={setShowSearchPage} />
      ) : (
        <Home setShowSearchPage={setShowSearchPage} />
      )}
    </div>
  );
}

export default BooksApp;
