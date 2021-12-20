import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
//import * as BooksAPI from "./BooksAPI";
import { useState } from "react";
import Search from "./pages/search.page";
import Home from "./pages/home.page";
import NotFound from "./pages/notFound.page";

function BooksApp() {
  return (
    <div className="app">
      <Routes>
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/notFound" />} />
      </Routes>
    </div>
  );
}

export default BooksApp;
