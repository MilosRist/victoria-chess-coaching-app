import Header from '../components/Header'
import PracticeProblem from '../components/PracticeProblem'
import set1problem1 from '../assets/problemset1/set1problem1.png'
import set1problem2 from '../assets/problemset1/set1problem2.png'
import set1problem3 from '../assets/problemset1/set1problem3.png'
import set1problem4 from '../assets/problemset1/set1problem4.png'
import set1problem5 from '../assets/problemset1/set1problem5.png'
import set1problem6 from '../assets/problemset1/set1problem6.png'
import set1problem7 from '../assets/problemset1/set1problem7.png'
import set1problem8 from '../assets/problemset1/set1problem8.png'
import set1problem9 from '../assets/problemset1/set1problem9.png'
import set1problem10 from '../assets/problemset1/set1problem10.png'
import set1problem11 from '../assets/problemset1/set1problem11.png'
import set1problem12 from '../assets/problemset1/set1problem12.png'
import set1problem13 from '../assets/problemset1/set1problem13.png'
import set1problem14 from '../assets/problemset1/set1problem14.png'
import set1problem15 from '../assets/problemset1/set1problem15.png'
import set1problem16 from '../assets/problemset1/set1problem16.png'
import set1problem17 from '../assets/problemset1/set1problem17.png'
import set1problem18 from '../assets/problemset1/set1problem18.png'
import set5problem1 from '../assets/problemset1/set5problem1.png'
import set5problem2 from '../assets/problemset1/set5problem2.png'
import set5problem3 from '../assets/problemset1/set5problem3.png'
import set5problem4 from '../assets/problemset1/set5problem4.png'
import set5problem5 from '../assets/problemset1/set5problem5.png'
import set5problem6 from '../assets/problemset1/set5problem6.png'
import set5problem7 from '../assets/problemset1/set5problem7.png'
import set5problem8 from '../assets/problemset1/set5problem8.png'


const ProblemSet1 = () => {
    const answerkey = [
        {id: 0, answer: ["qg7#"], opponent: [""], image: set1problem1, text: "1. White to move. Mate in 1"},
        {id: 1, answer: ["rb8#"], opponent: [""], image: set1problem2, text: "2. White to move. Mate in 1"},
        {id: 2, answer: ["rh5#"], opponent: [""], image: set1problem3, text: "4. White to move. Mate in 1"},
        {id: 3, answer: ["qxh7#"], opponent: [""], image: set1problem4, text: "5. White to move. Mate in 1 (don't forget to include an 'x' for capturing!)"},
        {id: 4, answer: ["qxd7#"], opponent: [""], image: set1problem5, text: "6. White to move. Mate in 1"},
        {id: 5, answer: ["bg4#"], opponent: [""], image: set1problem6, text: "7. Black to move. Mate in 1"},
        {id: 6, answer: ["rg7#"], opponent: [""], image: set1problem7, text: "8. White to move. Mate in 1"},
        {id: 7, answer: ["e4#"], opponent: [""], image: set1problem8, text: "9. White to move. Mate in 1"},
        {id: 8, answer: ["rb8#"], opponent: [""], image: set1problem9, text: "3. White to move. Mate in 1"},
        {id: 9, answer: ["qd4#"], opponent: [""], image: set1problem10, text: "10. White to move. Mate in 1"},
        {id: 10, answer: ["qh8#"], opponent: [""], image: set1problem11, text: "11. White to move. Mate in 1"},
        {id: 11, answer: ["rc1#"], opponent: [""], image: set1problem12, text: "12. Black to move. Mate in 1"},
        {id: 12, answer: ["rxh4#"], opponent: [""], image: set1problem13, text: "13. Black to move. Mate in 1"},
        {id: 13, answer: ["qe7#"], opponent: [""], image: set1problem14, text: "14. Black to move. Mate in 1"},
        {id: 14, answer: ["re7#"], opponent: [""], image: set1problem15, text: "15. White to move. Mate in 1"},
        {id: 15, answer: ["qe2#"], opponent: [""], image: set1problem16, text: "16. Black to move. Mate in 1"},
        {id: 16, answer: ["g7#"], opponent: [""], image: set1problem17, text: "17. White to move. Mate in 1"},
        {id: 17, answer: ["nxe6#"], opponent: [""], image: set1problem18, text: "18. White to move. Mate in 1"},
        {id: 18, answer: ["ne5+", "nxd7"], opponent: ["Ke7"], image: set5problem1, text: "White to move and win material in 2", game:"Evans, William Davies – Saint Amant, Pierre Charles Four (London 1839)"},
        {id: 19, answer: ["ne4+", "nxc5"], opponent: ["Kxg7"], image: set5problem2, text: "White to move and win material in 2", game: "Boncourt – Zekeriski (Paris 1839)"},
        {id: 20, answer: ["be6+", "bxg4"], opponent: ["Kb8"], image: set5problem3, text: "White to move and win material in 2", game: "Von Heydebrand und der Lasa, Tassilo – Mayet, Carl (Berlin 1837)"},
        {id: 21, answer: ["bxc7+", "rxe3"], opponent: ["Qxc7"], image: set5problem4, text: "White to move and avoid losing material in 2!", game: "Hanstein, Wilhelm – Mayet, Carl (Berlin 1837)"},
        {id: 22, answer: ["qxf7+", "ng5+", "nxh3"], opponent: ["Kxf7", "Kg8"], image: set5problem5, text: "White to move and win a knight in 3", game:"Von Biluger, Paul Rudolf – Mayet, Carl (Berlin 1840)"},
        {id: 23, answer: ["nh6+", "nxf7"], opponent: ["Kg7"], image: set5problem6, text: "White to move and win material in 2", game:"Staunton, Howard – NN (London 1841)"},
        {id: 24, answer: ["bxd6", "nc7+", "nxa8"], opponent: ["cxd6", "Kf8"], image: set5problem7, text: "White to move and win material in 3", game:"Cochrane, John – Staunton, Howard (London, 1842)"},
        {id: 25, answer: ["bxf7+", "ng5+", "nxe4"], opponent: ["Kxf7???", "Kg8"], image: set5problem8, text: "White to move and win material in 3", game:"Von der Goltz, F – Von Heydebrand und der Lasa, Tassilo (Berlin 1837)"},
    ]

    const userInput = ''

    return (
        <div>
            <Header />
            <div className='flex'>
                <div className="lg:w-1/2 block mr-auto ml-auto mt-40 text-lg w-4/5">
                    <h1 className="text-4xl font-mono">Problem Set 1: Problems for Beginners</h1>
                    <br></br>
                    <p>The following problems are designed to help beginners get a basic understanding of common mating patterns and tactics. To do these problems, you need to understand chess notation for which you can find a description in lesson 1. Here is an example as a reminder though, if you move the queen to an empty square on e5 you would write 'Qe5'. If the queen is capturing on e5 you would write 'Qxe5'. If the queen delivers check it would be Qe5+ and if the queen delivers mate it would be Qe5#. For the practice problems, don't forget to add a '#' for cehckmate and a '+' for delivering check! This means for every mate in 1 problem for example your answer should have a '#' at the end.</p>
                    <br></br>
                    <h2 className="text-3xl font-mono">Mate in 1</h2>
                    <br></br>
                    <p>These first couple of problems are the simplest checkmates you will encounter. Refer to lessons 1 and 2 to see how to get into these common positions.</p>
                    <br></br>
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[0].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[1].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[8].id} />
                    <p>This next series of checkmates are from positions taken from my blitz games! This will give you a better sense of how to spot checkmates in a real game scenario.</p>
                    <br></br>
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[2].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[3].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[4].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[5].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[6].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[7].id} />
                    <p>How about some checkmates delivered by a famous player? The following problems are from blitz games played by one of the greatest chess players of all time, Hikaru Nakamura.</p>
                    <br></br>
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[9].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[10].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[11].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[12].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[13].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[14].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[15].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[16].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[17].id} />
                    <h2 className="text-3xl font-mono">Back Rank Checkmates</h2>
                    <br></br>
                    <p>It is incredibly common to deliver checkmate on your last rank, referred to as the back rank. This is because the king usually stays on this back rank until the endgame. The following problems will all be based on this theme but include mates that take multiple moves.</p>
                    <br></br>
                    <h2 className="text-3xl font-mono">Forks</h2>
                    <br></br>
                    <p>Forks are a fundemnetal tactic in chess because they allow you to threaten two pieces at the same time. Ideally, both of these pieces are of higher value than the forking piece or one piece is of higher value and the other is the king. This is because such a situation guarantees that you will win material. The following problems include forks with the bishop and the knight which are very common to deliver forks with and are typically the most lethal for beginners because they can fork any combination of the king, queen, and rooks to win material. In some situations though, forks can be used to simply to win a pawn but this can still be enough to win the game!</p>
                    <br></br>
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[18].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[19].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[20].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[21].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[22].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[23].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[24].id} />
                    <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[25].id} />
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
                    <br></br>
                    <p className='font-mono text-2xl'>6. Other Common Mating Patterns</p>
                </div>
            </div>
        </div>
    )
}

export default ProblemSet1