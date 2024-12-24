import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import PracticeProblem from '../components/PracticeProblem'

const ProblemSet1 = () => {

    const [answers, setAnswers] = useState([]); 
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const response = await fetch('https://victoria-chess-coaching-app.onrender.com/api/answers');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAnswers(data); 
            } catch (error) {
                console.error('Error fetching answers:', error);
            }
        };

        fetchAnswers();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            const loggedUserJSON = window.localStorage.getItem('loggedUser');
            if (loggedUserJSON) {
                const user = JSON.parse(loggedUserJSON);
                setUser(user);
            } else {
                console.warn('No logged-in user found.');
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        console.log('Fetched answers:', answers);
    }, [answers]);

    useEffect(() => {
        console.log('Fetched user:', user);
    }, [user]);

    const userInput = ''

    return (
        <div>
            <Header />
            <div className='flex'>
                <div className="lg:w-1/2 block mr-auto ml-auto mt-40 text-lg w-4/5">
                    <h1 className="text-4xl font-mono">Problem Set 1: Problems for Beginners</h1>
                    <br></br>
                    <p>The following problems are designed to help beginners get a basic understanding of common mating patterns and tactics. To do these problems, you need to understand chess notation for which you can find a description in lesson 1. Here is an example as a reminder though, if you move the queen to an empty square on e5 you would write 'Qe5'. If the queen is capturing on e5 you would write 'Qxe5'. If the queen delivers check it would be Qe5+ and if the queen delivers mate it would be Qe5#. For the practice problems, don't forget to add a '#' for checkmate and a '+' for delivering check! This means for every mate in 1 problem for example your answer should have a '#' at the end.</p>
                    <br></br>
                    <h2 className="text-3xl font-mono">Mate in 1</h2>
                    <br></br>
                    <p>These first couple of problems are the simplest checkmates you will encounter. Refer to lessons 1 and 2 to see how to get into these common positions.</p>
                    <br></br>
                    {answers.length > 0 && [0, 1, 8].map((index) => (
                    <PracticeProblem
                        key={answers[index]._id}  
                        answerkey={answers}
                        userInput={userInput}
                        id={answers[index].id}
                        user={user}
                    />
                    ))}
                    <p>This next series of checkmates are from positions taken from my blitz games! This will give you a better sense of how to spot checkmates in a real game scenario.</p>
                    <br></br>
                    {answers.length > 0 && answers.slice(2, 8).map((problem) => (
                    <PracticeProblem
                        key={problem.id}  
                        answerkey={answers}
                        userInput={userInput}
                        id={problem.id}
                        user={user}
                    />
                    ))}
                    <p>How about some checkmates delivered by a famous player? The following problems are from blitz games played by one of the greatest chess players of all time, Hikaru Nakamura.</p>
                    <br></br>
                    {answers.length > 0 && answers.slice(9, 18).map((problem) => (
                    <PracticeProblem
                        key={problem.id}
                        answerkey={answers}
                        userInput={userInput}
                        id={problem.id}
                        user={user}
                    />
                    ))}
                    <h2 className="text-3xl font-mono">Back Rank Checkmates</h2>
                    <br></br>
                    <p>It is incredibly common to deliver checkmate on your last rank, referred to as the back rank. This is because the king usually stays on this back rank until the endgame. The following problems will all be based on this theme but include mates that take multiple moves and that may involve either edge of the board as well.</p>
                    <br></br>
                    {answers.length > 0 && answers.slice(26, 37).map((problem) => (
                    <PracticeProblem
                        key={problem.id} 
                        answerkey={answers}
                        userInput={userInput}
                        id={problem.id}
                        user={user}
                    />
                    ))}
                    <h2 className="text-3xl font-mono">Mate in 2</h2>
                    <br></br>
                    <p>Now we can continue with general positions that involve a checkmate in 2 moves. A mate in 2 usually starts with an initial check followed by checkmate, although not always.</p>
                    <br></br>
                    {answers.length > 0 && answers.slice(37, 41).map((problem) => (
                    <PracticeProblem
                        key={problem.id}  
                        answerkey={answers}
                        userInput={userInput}
                        id={problem.id}
                        user={user}
                    />
                    ))}
                    <h2 className="text-3xl font-mono">Pins</h2>
                    <br></br>
                    <p>Pins are a key tactic for immobilizing enemy pieces which can iseally result in exchanging for a piece of greater value or delivering mate.</p>
                    <br></br>
                    {answers.length > 0 && answers.slice(41, 44).map((problem) => (
                    <PracticeProblem
                        key={problem.id}  
                        answerkey={answers}
                        userInput={userInput}
                        id={problem.id}
                        user={user}
                    />
                    ))}
                    <h2 className="text-3xl font-mono">Forks</h2>
                    <br></br>
                    <p>Forks are a fundemnetal tactic in chess because they allow you to threaten two pieces at the same time. Ideally, both of these pieces are of higher value than the forking piece or one piece is of higher value and the other is the king. This is because such a situation guarantees that you will win material. The following problems include forks with the bishop and the knight which are very common to deliver forks with and are typically the most lethal for beginners because they can fork any combination of the king, queen, and rooks to win material. In some situations though, forks can be used to simply to win a pawn but this can still be enough to win the game!</p>
                    <br></br>
                    {answers.length > 0 && answers.slice(18, 26).map((problem) => (
                    <PracticeProblem
                        key={problem.id} 
                        answerkey={answers}
                        userInput={userInput}
                        id={problem.id}
                        user={user}
                    />
                    ))}
                </div>
                <div className="w-1/5 lg:block mr-20 ml-0 mt-40 text-lg hidden">
                    <p className='font-mono text-3xl'>Contents</p>
                    <br></br>
                    <p className='font-mono text-2xl'>1. Mate in 1</p>
                    <br></br>
                    <p className='font-mono text-2xl'>2. Back Rank Checkmates</p>
                    <br></br>
                    <p className='font-mono text-2xl'>3. Mate in 2</p>
                    <br></br>
                    <p className='font-mono text-2xl'>4. Pins</p>
                    <br></br>
                    <p className='font-mono text-2xl'>5. Forks</p>
                </div>
            </div>
        </div>
    )
}

export default ProblemSet1