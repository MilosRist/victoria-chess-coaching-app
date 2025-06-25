import React, { useState, useEffect } from 'react';
import userService from '../services/users'; 
import { jwtDecode } from 'jwt-decode';

const PracticeProblem = (props) => {
  const [response, setResponse] = useState('');
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [revealAnswer, setRevealAnswer] = useState('');
  const [inputs, setInputs] = useState(Array(props.answerkey[props.id].answer.length).fill(''));
  const answers = props.answerkey[props.id].answer;
  const opponents = props.answerkey[props.id].opponent;

  useEffect(() => {
    const fetchCompletedQuestions = async () => {
      setIsLoading(true);
      try {
        if (props.user && props.user.id) {
          const userData = await userService.getUser(props.user.id);
          setCompletedQuestions(userData.questions_answered || []);
        }
      } catch (error) {
        console.error('Error fetching completed questions:', error);
        setCompletedQuestions([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCompletedQuestions();
    console.log('userId:', props.user.id);
    console.log('questionId:', props.idkey);
    console.log('token:', props.user.token)
  }, [props.user]);
  

  const handleInputChange = (index, event) => {
    event.preventDefault();
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const addAnswer = async (event) => {
    event.preventDefault();
    setRevealAnswer('');
    const newInputs = [...inputs];

    for (let i = 0; i < answers.length; i++) {
      if (newInputs[i].toLowerCase() !== answers[i]) {
        setResponse('Wrong. Try Again!');
        setInputs(Array(answers.length).fill(''));
        return;
      }
    }

    setResponse('Correct!');
    setInputs(Array(answers.length).fill(''));
    
  if (props.user && props.user.token) {
    const token = props.user.token
    const decodedToken = jwtDecode(props.user.token); 
    const userId = decodedToken.iq;  

    if (!completedQuestions.includes(props.idkey)) {
      try {
        const response = await userService.addQuestion(props.idkey, token);
        setCompletedQuestions([...completedQuestions, props.idkey]);
      } catch (error) {
        console.error('Error adding question:', error.response?.data || error.message);
        setResponse('Failed to save the question. Please try again later.');
      }
    }
  } else {
    console.error("User token is not available");
    setResponse('Unable to retrieve user information.');
  }
};

  const showAnswer = (event) => {
    event.preventDefault();
    setRevealAnswer(answers.join(', '));
  };

  return (
    <div
      className={`flex mb-10 ${
        !isLoading && completedQuestions?.includes(props.idkey) ? 'bg-green-100' : 'bg-white'
      }`}
    >
      <div>
        <p className="font-mono mb-5 text-sm w-3/4">{props.answerkey[props.id].game}</p>
        <img src={props.answerkey[props.id].image} className="w-3/4 flex" />
      </div>
      <div className="w-1/2 justify-center items-center flex flex-col">
        <p className="font-mono mb-5">{props.answerkey[props.id].text}</p>
        <form className="w-1/2 justify-center text-center font-mono" onSubmit={addAnswer}>
          <div>
            {inputs.map((input, index) => (
              <div key={index} className="flex">
                {index + 1}.{' '}
                <input
                  type="text"
                  value={input}
                  onChange={(e) => handleInputChange(index, e)}
                  className="bg-gray-100 border border-gray-700 w-20 mb-5 rounded-full text-center ml-2"
                />
                <div className="w-20 mb-5 pr-2 pl-2 ml-5 text-center">
                  <p>{opponents[index]}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button
              type="submit"
              className="bg-gray-100 hover:bg-gray-200 border border-gray-700 p-2 mb-5 rounded-lg"
            >
              CHECK
            </button>
          </div>
        </form>
        <form onSubmit={showAnswer}>
          <button
            type="submit"
            className="bg-gray-100 hover:bg-gray-200 border border-gray-700 p-2 mb-5 rounded-lg text-sm"
          >
            ANSWER
          </button>
        </form>
        <p className="font-mono">{response}</p>
        <p className="font-mono">{revealAnswer}</p>
        {!isLoading && completedQuestions?.includes(props.idkey) && (
          <p className="font-mono">Correct!</p>
        )}
      </div>
    </div>
  );
};

export default PracticeProblem;
