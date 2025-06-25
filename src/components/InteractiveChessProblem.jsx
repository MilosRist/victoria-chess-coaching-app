import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import userService from '../services/users';
import { jwtDecode } from 'jwt-decode';
import React from 'react';

const InteractiveChessProblem = ({ problem, user, idkey }) => {
  const [game, setGame] = useState(new Chess(problem.fen));
  const [moveHistory, setMoveHistory] = useState([]);
  const [status, setStatus] = useState(''); // 'solving', 'correct', 'wrong'
  const [completed, setCompleted] = useState(false);
  
  // Check if user has already completed this problem
  useEffect(() => {
    const checkCompleted = async () => {
      if (user?.id) {
        try {
          const userData = await userService.getUser(user.id);
          console.log('API Response:', userData);
          
          if (userData?.questions_answered) {
            const isCompleted = userData.questions_answered.includes(idkey);
            setCompleted(isCompleted);
            if (isCompleted) setStatus('correct');
          }
        } catch (error) {
          console.error('API Error:', error);
        }
      }
    };
    checkCompleted();
  }, [user, idkey]);

  // Check if move matches solution
  const checkSolution = (move) => {
    const expectedMove = problem.answer[moveHistory.length];
    const moveMatches = move.san === expectedMove || 
                       move.san === expectedMove.replace('#', '') || 
                       move.san === expectedMove.replace('+', '');

    if (moveMatches) {
      const newMoveHistory = [...moveHistory, move.san];
      setMoveHistory(newMoveHistory);

      // Check if puzzle is complete
      if (newMoveHistory.length === problem.answer.length) {
        setStatus('correct');
        markAsCompleted();
        return true;
      }
      return true;
    }
    
    setStatus('wrong');
    return false;
  };

  const markAsCompleted = async () => {
    if (user?.token && !completed) {
      try {
        const response = await userService.addQuestion(idkey, user.token);
        // Check for successful response in data instead
        if (response && response.success) { // or whatever success indicator your API uses
          setCompleted(true);
        } else {
          console.error('Failed to mark question:', response?.message || 'No success flag');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const onDrop = (sourceSquare, targetSquare) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // always promote to queen for simplicity
      });

      if (!move) return false;
      
      const isCorrect = checkSolution(move);
      setGame(new Chess(game.fen()));
      
      return isCorrect;
    } catch (e) {
      return false;
    }
  };

  const resetBoard = () => {
    setGame(new Chess(problem.fen));
    setMoveHistory([]);
    setStatus('');
  };

  return (
    <div className={`flex mb-10 ${completed ? 'bg-green-100 p-4 rounded-lg' : 'bg-white p-4 rounded-lg'}`}>      <div className="w-1/2 p-4">
        <Chessboard 
          position={game.fen()} 
          onPieceDrop={onDrop}
          boardWidth={300}
          customBoardStyle={{
            borderRadius: '4px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
          }}
        />
        <button 
          onClick={resetBoard}
          className="mt-2 bg-gray-100 hover:bg-gray-200 border border-gray-700 p-2 rounded-lg"
        >
          Reset Board
        </button>
      </div>
      <div className="w-1/2 p-4">
        <p className="font-mono mb-5">{problem.text}</p>
        <div className="mb-5">
          <p className="font-mono font-bold">Moves:</p>
          <div className="font-mono">
            {moveHistory.map((move, i) => (
              <span key={i} className="mr-2">
                {i % 2 === 0 ? `${Math.floor(i/2) + 1}.` : ''} {move}
              </span>
            ))}
          </div>
        </div>
        {status === 'correct' && (
          <p className="font-mono text-green-600">Correct! Puzzle solved!</p>
        )}
        {status === 'wrong' && (
          <p className="font-mono text-red-600">Not the correct move. Try again!</p>
        )}
        {completed && (
          <p className="font-mono text-green-600">You've completed this problem!</p>
        )}
      </div>
    </div>
  );
};

export default InteractiveChessProblem;