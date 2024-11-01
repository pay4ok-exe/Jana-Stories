// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Modal from "./components/Modal";
import datas from "./datas.json";

function App() {
  const [results, setResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Function to process data from the local JSON file
    function getTopStoriesFromLocalData() {
      // Access articles from JSON and shuffle
      const articles = datas.articles;
      const randomizedArticles = shuffleArray(articles);

      // Filter only articles that have an image and take the top 15
      const articlesWithImages = randomizedArticles
        .filter(
          (article) =>
            article.urlToImage &&
            article.title &&
            article.description &&
            article.content
        )
        .slice(0, 15);

      // Update the state with filtered articles
      setResults(articlesWithImages);
    }

    // Call the function to process data
    getTopStoriesFromLocalData();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <Header />
      {results.map((item, index) => (
        <Card key={index} item={item} onClick={() => handleOpenModal(item)} />
      ))}
      <Footer />
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        content={selectedItem}
      />
    </div>
  );
}

export default App;
