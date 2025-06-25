import { useState, useEffect, useCallback } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import React from 'react';

export default function TacticsTrainer({ initialFen, solutionMoves }) {
  const [game, setGame] = useState(new Chess(initialFen));
  const [moveHistory, setMoveHistory] = useState([]);
  const [status, setStatus] = useState(''); // 'solving', 'correct', 'wrong'
  
  // Reset the game when the initialFen changes
  useEffect(() => {
    setGame(new Chess(initialFen));
    setMoveHistory([]);
    setStatus('');
  }, [initialFen]);

  // Check if the move matches the solution
  const checkSolution = useCallback((move) => {
    // Get the expected next move in the solution
    const expectedMove = solutionMoves[moveHistory.length];
    
    // Simple comparison - you might want to enhance this
    if (move === expectedMove || move === expectedMove.replace('#', '')) {
      const newMoveHistory = [...moveHistory, move];
      setMoveHistory(newMoveHistory);
      
      // Check if puzzle is complete
      if (newMoveHistory.length === solutionMoves.length) {
        setStatus('correct');
      }
      return true;
    }
    
    setStatus('wrong');
    return false;
  }, [moveHistory, solutionMoves]);

  function onDrop(sourceSquare, targetSquare) {
    try {
      // Attempt to make the move
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // always promote to queen for simplicity
      });

      // If invalid move, return false
      if (!move) return false;
      
      // Check if move matches solution
      const isCorrect = checkSolution(move.san);
      
      // Update game state
      setGame(new Chess(game.fen()));
      
      return isCorrect;
    } catch (e) {
      return false;
    }
  }

  return (
    <div className="tactics-trainer">
      <div className="board-container">
        <Chessboard 
          position={game.fen()} 
          onPieceDrop={onDrop}
          boardWidth={600} // or whatever fits your layout
          customBoardStyle={{
            borderRadius: '4px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
          }}
        />
      </div>
      
      <div className="tactics-status">
        {status === 'correct' && (
          <div className="success-message">Puzzle solved! Well done!</div>
        )}
        {status === 'wrong' && (
          <div className="error-message">Not the correct move. Try again!</div>
        )}
      </div>
      
      <div className="move-history">
        <h3>Move History</h3>
        <ul>
          {moveHistory.map((move, i) => (
            <li key={i}>{i % 2 === 0 ? `${i/2 + 1}.` : ''} {move}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}