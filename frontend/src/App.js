import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container></Container>
        <h1>Testing</h1>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
