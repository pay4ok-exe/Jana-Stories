// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Modal from './components/Modal';

function App() {
  const [results, setResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function getTopStoriesFromApi() {
      const API_KEY = '529f1534590c456f89f2e452677867d4';
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=technology&from=2024-08-30&to=2024-08-30&sortBy=popularity&apiKey=${API_KEY}`);
        const resJson = await response.json();

        // Randomize the order of the articles
        const randomizedArticles = shuffleArray(resJson.articles);

        // Filter only articles that have an image and take the top 10
        const articlesWithImages = randomizedArticles.filter(article => article.urlToImage).slice(0, 10);

        // Update state
        setResults(articlesWithImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the function to fetch the data
    getTopStoriesFromApi();
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
        content={{
          title: selectedItem?.title,
          image: selectedItem?.urlToImage,
          text: selectedItem?.content,
          publishedAt: selectedItem?.publishedAt,
          author: selectedItem?.author,
          section: selectedItem?.section,
          sourceName: selectedItem?.source.name,
          url: selectedItem?.url // Add URL to content
        }}
      />
    </div>
  );
}

export default App;
