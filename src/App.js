import Card from './components/Card';
import './App.css';
import { useState } from 'react';

function App() {

  const initialCards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(shuffleArray(initialCards)); 
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2) {
      if (!matchedCards.includes(flippedCards[0]) && !matchedCards.includes(flippedCards[1])) {
        setFlippedCards([]);
      };
    };

    if (flippedCards.length < 2) {
      setFlippedCards([...flippedCards, index]);
    };

    if (flippedCards.length === 1 && cards[flippedCards[0]] === cards[index]) {
      setMatchedCards([...matchedCards, flippedCards[0], index]);
      setFlippedCards([]);
    };
  };

  const restartGame = () => {
    setCards(shuffleArray(initialCards));
    setFlippedCards([]);
    setMatchedCards([]);
  }

  return (
    <div className='game-board'>
      {cards.map((card, index) => (
        <Card 
          key={index}
          card={card}
          index={index}
          isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
          onClick={() => handleCardClick(index)}
        />
      ))}

      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
};

export default App;