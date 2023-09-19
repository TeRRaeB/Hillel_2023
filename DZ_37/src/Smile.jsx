import React, { useState } from 'react';

function SmileyList() { 
  const [smileys, setSmileys] = useState([
    { id: 1, name: '😀', count: 0 },
    { id: 2, name: '😄', count: 0 },
    { id: 3, name: '😁', count: 0 },
    { id: 4, name: '😬', count: 0 },
  ]);
 
  const [winner, setWinner] = useState(null);
 
  const handleSmileyClick = (id) => {
    const updatedSmileys = smileys.map((smiley) =>
      smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley
    );
    setSmileys(updatedSmileys);
  };
 
  const handleShowResults = () => { 
    const maxCount = Math.max(...smileys.map((smiley) => smiley.count));
    const winningSmiley = smileys.find((smiley) => smiley.count === maxCount);
 
    setWinner(winningSmiley);
  };

  return (
    <div>
      <h1>Голосуй</h1>
      <ul>
        {smileys.map((smiley) => (
          <li key={smiley.id} style={{ listStyle: 'none'}}>
            <span
              onClick={() => handleSmileyClick(smiley.id)}
              style={{ fontSize: '24px', cursor: 'pointer' }}
            >
              {smiley.name}
            </span>
            <span>Кол-во кликов: {smiley.count}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleShowResults}>Результат</button>
      {winner && (
        <div>
          <h2>Победитель:</h2>
          <p>{winner.name}</p>
        </div>
      )}
    </div>
  );
}

export default SmileyList;
