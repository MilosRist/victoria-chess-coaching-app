import React, { useState, useEffect } from 'react';
import userService from '../services/users'; 
import { jwtDecode } from 'jwt-decode';

const PracticeProblem = (props) => {
  const [response, setResponse] = useState('');
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [revealAnswer, setRevealAnswer] = useState('');
  const [inputs, setInputs] = useState(Array(props.answerkey[props.id].answer.length).fill(''));
  const answers = props.answerkey[props.id].answer;
  const opponents = props.answerkey[props.id].opponent;

  useEffect(() => {
    const fetchCompletedQuestions = async () => {
      if (props.user && props.user.id) {
        const userData = await userService.getUser(props.user.id);
        setCompletedQuestions(userData.questions_answered);
      }
    };
    fetchCompletedQuestions();
    console.log('userId:', props.user.id);
    console.log('questionId:', props.id);
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
    
    const decodedToken = jwtDecode(user.token);
    const userId = decodedToken.iq;  

    if (!completedQuestions.includes(props.id)) {
      try {
          const response = await userService.addQuestion(userId, props.id); // This sends the userId and questionId
          setCompletedQuestions([...completedQuestions, props.id]);
      } catch (error) {
          console.error('Error adding question:', error.response?.data || error.message);
          setResponse('Failed to save the question. Please try again later.');
      }
  }
};

  const showAnswer = (event) => {
    event.preventDefault();
    setRevealAnswer(answers.join(', '));
  };

  return (
    <div
      className={`flex mb-10 ${
        completedQuestions.includes(props.id) ? 'bg-green-100' : 'bg-white'
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
      </div>
    </div>
  );
};

export default PracticeProblem;
