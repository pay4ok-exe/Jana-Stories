// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getTopStoriesFromApi() {
      try {
        const API_KEY = '529f1534590c456f89f2e452677867d4';
        const response = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-08-30&to=2024-08-30&sortBy=popularity&apiKey=${API_KEY}`);
        const resJson = await response.json();
        const results = resJson.articles.filter(article => article.urlToImage).slice(0, 10);

    // console.log(results.splice(1,11));
        setResults(results);
        console.log(results)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getTopStoriesFromApi();
  }, []);

  return (
    <div className="App">
      {results.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
