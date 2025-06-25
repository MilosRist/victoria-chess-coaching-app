import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import userService from '../services/users';
import { jwtDecode } from 'jwt-decode';
import React from 'react';

const InteractiveChessProblem = ({ problem, user, idkey }) => {
  const [game, setGame] = useState(new Chess(problem.fen));
  const [moveHistory, setMoveHistory] = useState([]);
  const [status, setStatus] = useState('');
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
        setCompleted(true);
        setStatus('correct');
        const updatedUser = await userService.getUser(user.id);
        console.log("Updated user:", updatedUser);
      } catch (error) {
        console.error('Error:', error);
        setCompleted(false);
        setStatus('');
      }
    }
  };

  const onDrop = (sourceSquare, targetSquare) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
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
    <div className={`flex flex-col md:flex-row mb-10 ${completed ? 'bg-green-100' : 'bg-white'} p-4 rounded-lg`}>
      {/* Problem Text - Right side on desktop, top on mobile */}
      <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
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
        {/* Status messages remain here */}
        {status === 'correct' && <p className="font-mono text-green-600">Correct! Puzzle solved!</p>}
        {status === 'wrong' && <p className="font-mono text-red-600">Not the correct move. Try again!</p>}
        {completed && <p className="font-mono text-green-600">You've completed this problem!</p>}
      </div>

      {/* Chessboard + Reset Button Container - Left side on desktop, middle on mobile */}
      <div className="w-full md:w-1/2 p-4 order-2 md:order-1 flex flex-col items-center">
        <div className="mb-4 w-full flex justify-center">
          <div className="w-[250px] md:w-[300px]"> {/* Responsive width container */}
            <Chessboard 
              position={game.fen()} 
              onPieceDrop={onDrop}
              boardWidth={250} // Set to mobile width (will be overridden by container on desktop)
              customBoardStyle={{
                borderRadius: '4px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
              }}
            />
          </div>
        </div>
        
        {/* Reset Button - Now always directly under chessboard */}
        <button 
          onClick={resetBoard}
          className="w-[200px] md:w-auto bg-gray-100 hover:bg-gray-200 border border-gray-700 p-2 rounded-lg"
        >
          Reset Board
        </button>
      </div>
    </div>
  );
};

export default InteractiveChessProblem;