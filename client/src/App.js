import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import QuestionList from './components/QuestionList';
import { fetchQuestions } from './services/api';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch questions when the component mounts
    const fetchQuestionsAsync = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };
  
    fetchQuestionsAsync();
  }, []);
  

  const handleSearch = async () => {
    // Implement the search functionality here using the searchTerm state
  };

  return (
    <div className="App">
      <SearchBar onSearch={setSearchTerm} />
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
