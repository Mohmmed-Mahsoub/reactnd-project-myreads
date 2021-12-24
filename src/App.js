import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";
import Search from "./pages/search.page";
import Home from "./pages/home.page";
import NotFound from "./pages/notFound.page";

function BooksApp() {
  const [isBooksDataFetched, setIsBooksDataFetched] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [booksData, setBooksData] = useState([]);
  useEffect(async () => {
    try {
      setIsBooksDataFetched(false);
      const allbooksData = await BooksAPI.getAll();
      setBooksData(allbooksData);
      setIsBooksDataFetched(true);
    } catch (error) {
      console.log(error);
    }
  }, [rerender]);
  return (
    <div className="app">
      <Routes>
        <Route path="/notFound" element={<NotFound />} />
        <Route
          path="/search"
          element={
            <Search
              rerenderWay={setRerender}
              rerenderVal={rerender}
              booksShelvesData={booksData}
            />
          }
        />
        <Route
          path="/"
          exact
          element={
            <Home
              isBooksDataFetched={isBooksDataFetched}
              booksData={booksData}
              rerenderWay={setRerender}
              rerenderVal={rerender}
            />
          }
        />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/notFound" />} />
      </Routes>
    </div>
  );
}

export default BooksApp;
