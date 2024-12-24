import React, { useEffect, useState } from 'react';

import Header from '../components/Header'
import PracticeProblem from '../components/PracticeProblem'

import pawnmovement from '../assets/pawn-movement.png'
import pawncapture from '../assets/pawn-capture.png'
import bishopmovement from '../assets/bishop-movement.png'
import knightmovement from '../assets/knight-movement.png'
import knightjumping from '../assets/knight-jumping.png'
import rookmovement from '../assets/rook-movement.png'
import queenmovement from '../assets/queen-movement.png'
import kingmovement from '../assets/king-movement.png'
import kingsidecastling1 from '../assets/kingside-castling-1.png'
import kingsidecastling2 from '../assets/kingside-castling-2.png'
import queensidecastling1 from '../assets/queenside-castling-1.png'
import queensidecastling2 from '../assets/queenside-castling-2.png'
import threatenedcastle from '../assets/threatened-castle.png'
import checkedcastle from '../assets/checked-castle.png'
import enpassant1 from '../assets/enpassant1.png'
import enpassant2 from '../assets/enpassant2.png'
import basicqueenmate from '../assets/basic-queen-mate.png'
import laddermate1 from '../assets/ladder-mate1.png'
import laddermate2 from '../assets/ladder-mate2.png'
import backrankmate1 from '../assets/backrank-mate1.png'
import practiceproblem1 from '../assets/practiceproblem1.png'
import practiceproblem2 from '../assets/practiceproblem2.png'
import practiceproblem3 from '../assets/practiceproblem3.png'
import practiceproblem4 from '../assets/practiceproblem4.png'
import practiceproblem5 from '../assets/practiceproblem5.png'
import queenstalemate from '../assets/queenstalemate.png'
import pawnstalemate from '../assets/pawnstalemate.png'
import perpetualcheck from '../assets/perpetualcheck.png'
import chessnotation from '../assets/chess-notation.jpg'

const Post1 = () => {
    const answerkey = [
        {id: 0, answer: ["re8#"], opponent: [""], image: practiceproblem1, text: "1. White to move. Mate in 1"},
        {id: 1, answer: ['y'], opponent: [""], image: practiceproblem2, text: "2. Can white castle? (y or n)"},
        {id: 2, answer: ['n'], opponent: [""], image: practiceproblem3, text: "3. Can white castle? (y or n)"},
        {id: 3, answer: ['n'], opponent: [""], image: practiceproblem4, text: "4. Can white deliver mate? (y or n)"},
        {id: 4, answer: ['y'], opponent: [""], image: practiceproblem5, text: "5. Can white deliver mate? (y or n)"}
    ]

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
                <h1 className="text-4xl font-mono">Lesson 1: How to Move the Pieces and Deliver Checkmate</h1>
                <br></br>
                <p>If you are reading this article, congratulations on taking your first steps to trying to learn chess! Chess is becoming increasingly popular around the globe so you are joining millions of chess players who are trying to learn more about the game and improve every day. In the past, it seemed as though there was a notion that high-level chess players are geniuses and prior to the advent of computers learning chess was significantly more difficult if you didn’t have anybody to learn from. This has all changed in recent history with the internet hosting a seemingly countless number of free chess resources. There are so many online resources in fact, it may be overwhelming to decide where to start! That is where this blog comes in. The idea of these posts will be to take a complete beginner to the game of chess and turn them into a comfortable chess player that can enjoy this amazing game and proceed confidently to self-study. Keep reading and keep up with this blog if you want to slowly but surely improve your chess!</p>
                <br></br>
                <h2 className="text-3xl font-mono">How do you play chess?</h2>
                <br></br>
                <p>Chess is a strategic battle that takes place on an 8x8 board with a checkered light and dark pattern. The two opposing sides are the white and black pieces, who both fight to capture each other’s pieces, gain a positional advantage, and ultimately win the game through checkmate. Checkmate is the ultimate objective of the game and is when you capture the enemy king, which will be explained extensively later in this post. First and foremost, we need to understand how the pieces move.</p>
                <br></br>
                <h3 className="text-2xl font-mono">Piece Movement</h3>
                <br></br>
                <p>The simplest piece in regards to movement in chess is the pawn. The pawn can only move forwards, unlike all other pieces, and can do so only one square at a time, except on the first move when it can choose to move forwards up to two squares. </p>
                <br></br>
                <img src={pawnmovement} />
                <br></br>
                <p>In regards to capturing, pawns are unique in that they do not capture in the direction that they move, they capture diagonally by one square. Capturing is when you move one of your pieces to a square that your opponent is occupying and remove their piece from the board. Every other piece aside from the pawn simply captures in the direction that they move. </p>
                <br></br>
                <img src={pawncapture} />
                <br></br>
                <p>Next is the bishop which moves and captures diagonally any number of spaces. You may notice that one bishop starts on a light square and the other on a dark square. Consequently, each of these bishops is restricted to this respective square colour and are called the light squared and dark squared bishops. </p>
                <br></br>
                <img src={bishopmovement} />
                <br></br>
                <p>Now for the knight which has the most curious movement pattern. It moves in an “L” shape, travelling 2 squares in one direction and one square in another.</p>
                <br></br>
                <img src={knightmovement} />
                <br></br>
                <p>The knight is also the only piece that can jump over other pieces! This means, for example, that on the first move you can opt to move your knight without moving any pawns.</p>
                <br></br>
                <img src={knightjumping} />
                <br></br>
                <p>The rooks can be found in each corner of the board and are able to move vertically and horizontally any number of spaces. This is a very simple yet tremendously powerful movement pattern.</p>
                <br></br>
                <img src={rookmovement} />
                <br></br>
                <p>The queen is the most versatile piece when it comes to movement. It can move both vertically/horizontally and diagonally any number of squares.</p>
                <br></br>
                <img src={queenmovement} />
                <br></br>
                <p>Finally, the king can move both vertically/horizontally and diagonally like the queen but only by one square in each direction.</p>
                <br></br>
                <img src={kingmovement} />
                <br></br>
                <h3 className="text-2xl font-mono">Rules</h3>
                <br></br>
                <p>Now that you know how the pieces move, it is time to go over some important rules. Firstly, white (the player with the light-coloured pieces) always moves first. Next, two other important movement-based rules exist in the game of chess. The first is called castling. Castling is when you move your king two spaces to the right and then move your rook immediately beside the king on the opposite side of its initial position. This can be done both with the rook closest to the king and the rook that is furthest from the king. Castling with the rook closest to the king is called kingside castling. An example of kingside castling is shown in the following two images: </p>
                <br></br>
                <img src={kingsidecastling1} />
                <br></br>
                <img src={kingsidecastling2} />
                <br></br>
                <p>You can also castle with the far rook which is referred to as queenside castling becasue you are castling with the rook that starts on the same half of the board as the queen. This looks as follows: </p>
                <br></br>
                <img src={queensidecastling1} />
                <br></br>
                <img src={queensidecastling2} />
                <br></br>
                <p>There are some additional rules that come with castling as well, namely: </p>
                <br></br>
                <div className='ml-10'>
                    <ul className='list-disc'>
                        <li>You cannot castle if you have already moved your king or rook </li>
                        <br></br>
                        <li>You cannot castle if there are any pieces between your king and rook</li>
                        <br></br>
                        <li>You cannot castle if the opponent is threating your king or threatening any square between your king and rook</li>
                    </ul>
                </div>
                <br></br>
                <p>Threatening means that your opponent can move their piece to a particular square. There is a special term for when the king is threatened which is called “check”. When the king is in check you must defend your king or move them away from harm or else you forfeit the game. When you are playing online this is not a major concern because the computer prevents illegal moves but if you are playing over the board in a tournament this may result in forfeit. As mentioned above you also cannot castle when your king is in check and thus you cannot use a castle to escape check. In the following example, black cannot escape check by castling. They instead must either capture the bishop or block with one of their pieces. </p>
                <br></br>
                <img src={checkedcastle} />
                <br></br>
                <p>In this next example, white is unable to castle queenside. This is because the bishop is threatening a square that is in the path of the castling move. As long as there is a threat on any of the three squares between the rook and the king in this position white will not be able to castle queenside.</p>
                <br></br>
                <img src={threatenedcastle} />
                <br></br>
                <p>A lot of beginners may not know this second move because it is very rare but it is important to know because it can also be very valuable. Essentially, if an opponent chooses to move their pawn up two squares on the first move and their pawn ends up beside your pawn, you can capture the pawn as if it only moved up one square. This looks like the following.</p>
                <br></br>
                <img src={enpassant1} />
                <br></br>
                <img src={enpassant2} />
                <br></br>
                <h2 className="text-3xl font-mono">How do you win?</h2>
                <br></br>
                <p>The objective of chess is to deliver checkmate to your opponent. Checkmate is when your king is in check and cannot escape by moving to any available squares, blocking the check, or capturing the piece that is delivering check. A very simple example of this can be shown with a king and queen vs just the opponent’s king.</p>
                <br></br>
                <img src={basicqueenmate} />
                <br></br>
                <p>As we can see, the opponent’s king has no squares that it can escape to and it cannot capture the queen because it is being defended by our king. This is a fundamental mating pattern (a common method of delivering checkmate) that you should know because oftentimes it just takes having one more pawn than your opponent, that you can promote to a queen, to win a game. It can be somewhat difficult to get into a position to deliver checkmate with just a queen though, and more often than not in beginner games you usually get into a winning position with more than just being up one pawn of material. Note: checkmate is often referred to as simply “mate”, and will be referred to as such through the rest of this lesson and future lessons.</p>
                <br></br>
                <h3 className="text-2xl font-mono">Common Mating Patterns for Beginners</h3>
                <br></br>
                <p>This is where the easiest and probably most common mate for beginners comes into play, the ladder mate. This mate is delivered by two rooks, a queen and a rook, or two queens. It is common to achieve such a position by being up a rook and a pawn at the end of a game and then being able to promote the pawn to a queen. The ladder mate looks like the following.</p>
                <br></br>
                <img src={laddermate1} />
                <br></br>
                <p>This is referred to as a ladder mate because of the ladder-like series of checks you can give to force the opponent’s king to one side of the board.</p>
                <br></br>
                <img src={laddermate2} />
                <br></br>
                <p>The last mating pattern we will go over in this lesson is the back rank mate. This is another very common mating pattern for beginners and often a sneaky way of delivering mate to the enemy king. We will go over many other concepts that can be combined to create a back rank mate in a future lesson but for now, this mate is delivered by simply moving a single rook or queen to the last row on the opposite side of the board from where you start. Here is a simple example to illustrate this concept.</p>
                <br></br>
                <img src={backrankmate1} />
                <br></br>
                <p>As we can see in this example, once the rook lands on the back rank, the king has nowhere to go and is therefore checkmated. This may seem like a beginner mistake but even in intermediate level play, especially if you are playing a bullet/blitz game, it is very easy to be lured out with the desire to capture a weak piece while leaving your king vulnerable to a simple back rank mate.</p>
                <br></br>
                <h2 className="text-3xl font-mono">How Does a Draw Happen?</h2>
                <br></br>
                <p>In chess, there are a couple of situations where the game actually ends in a draw. In fact, at the highest level of chess, most games end in a draw! This is because players are usually very evenly matched so it is difficult to get into a winning position. Let’s go over the three ways in which a draw can occur.</p>
                <br></br>
                <h3 className ="text-2xl font-mono">Insufficient Material</h3>
                <br></br>
                <p>The first, and simplest, method is simply drawing because neither player has the pieces necessary to checkmate their opponent’s king. For example, if only the two kings are left on the board, then obviously neither can deliver mate to the other and this is a draw. Other situations where a draw due to insufficient material occurs is when each/either player is left with a single knight, a single bishop, or two knights as none of these combinations can deliver checkmate. In future lessons we will see that you can deliver mate with a single rook or two bishops against an enemy king and thus in these situations it is not a draw.</p>
                <br></br>
                <h3 className ="text-2xl font-mono">Stalemate</h3>
                <br></br>
                <p>The second method is stalemate. Stalemate occurs when one player has no legal moves on their turn. This means that the king cannot move to any available squares but is not being threatened, and all other pieces on the board either cannot move or have been captured. This can happen accidentally in winning positions like in the queen and king vs king endgame that we will go over next lesson, as shown here.</p>
                <br></br>
                <img src={queenstalemate} />
                <br></br>
                <p>In some positions though, the opponent can force a stalemate or draw due to insufficient material which can be seen in a classic king and pawn vs king endgame in which white has no way of winning and the final position looks like this.</p>
                <br></br>
                <img src={pawnstalemate} />
                <br></br>
                <p>Hopefully it is clear that the king has nowhere to move in the previous two positions but is not being threatened, thus leading to stalemate. In general, you always want to be very careful of stalemate because it is easy to accidentally deliver stalemate in completely winning positions by accident in more ways than just the king and queen vs king endgame!</p>
                <br></br>
                <h3 className ="text-2xl font-mono">Threefold Repetition</h3>
                <br></br>
                <p>Finally, you can achieve a draw by having both you and your opponent repeat the same moves three times. This may occur when each player only has two possible squares to prevent a loss and they just move back and forth between them or in some situations may be forced by a player when given the chance if they are in a losing position. This occurs in the form of a perpetual check, meaning that the player giving check can keep giving check for the rest of the game and thus when the same series of checks is repeated three times the game comes to a draw. It can clearly be seen in the following diagram how this is possible.</p>
                <br></br>
                <img src={perpetualcheck} />
                <br></br>
                <p>If white is feeling uneasy about the threat on f2 and the pawn on c3 they can simply opt to play Qe8. After the king moves anywhere it is simply perpetual check by moving the queen between e8 and e7 which saves white from playing what may seem like an intimidating endgame.</p>
                <br></br>
                <h2 className="text-3xl font-mono">Understanding Piece Value</h2>
                <br></br>
                <p>Before getting into some practice problems, the last thing you need to know before you start playing chess is how much each piece is worth. The versatility of movement between pieces may give you an immediate feeling as to roughly what the value of the pieces may be, but these values have been precisely quantified by chess theorists. Starting with the pawn, this piece is considered to be worth “1”. This is because it isn’t very powerful on its own and has very limited mobility. Next are the knight and bishop which are referred to as the “minor pieces” and are each worth “3”. This is because each of these pieces has some mobility but neither can deliver checkmate to the enemy king in combination with only one’s own king. The rook is awarded the second highest value at “5”. This may come as a slight surprise because at a glance it seems as though the rook and the bishop have roughly equal mobility, so why is the rook worth so much more? </p>
                <br></br>
                <p>The answer involves three main factors, the first of which is that you can actually deliver mate with just a king and a rook! This can be a difficult mating pattern for beginners so you do not need to worry about it too much right now but we will go over it eventually. The next factor is that, as mentioned earlier, each bishop is confined to a single square colour for the entire game. In certain situations, this can severely limit the effectiveness of the bishop and it is common to tactically place your piece to limit the effectiveness if the bishop. Finally, the rook can block off entire files on its own which can block of a major portion of the board for the enemy’s king, and can prove particularly useful when trying to promote a pawn.</p>
                <br></br>
                <p>Finally, the queen is worth by far the most with a value of “9”. This is because the queen is the most versatile piece and is incredibly powerful for threatening mate to your opponent.</p>
                <br></br>
                <h2 className="text-3xl font-mono">Chess Notation</h2>
                <br></br>
                <img src={chessnotation} />
                <br></br>
                <p>It is useful to know chess notation if you are planning on ever reading a chess book or playing in a tournament. You will also need to understand chess notation to solve the problems in this app. Luckily, it is very simple! As you can see in the image above, there are 8 files labeled from a to h and 8 ranks labeled from 1 to 8. Logically, the squares go from a1 to h8.<br></br><br></br>There are a couple of more things you need to know aside from this simple layout. The first is that you add a capitalized letter corresponding to the piece you are moving in front of the square you are moving it to. These letters are N for the knight, B for the bishop, R for the rook, Q for the queen, and K for the king. For pawns you simply do not add any letter so if you move a pawn to e4 you just write 'e4'. If you move you knight to e4 though you would write Ne4.<br></br><br></br>There is also specific notations for when you capture, give check, or give checkmate. When you capture a piece you add an 'x' between the piece label and square. So, if the knight captures a piece of e4 you would write 'Nxe4'. For pawns this is a little bit different, since they do not have a piece label you add the file that the pawn was on before capturing in front of the move. For example, if the pawn on e4 captures the pawn on d5 you would write exd4 (notice that the file is always lowercase). Finally, for check and checkmate you simply add a '+' or '#' respectively to the end of the move. So, if the bishop delivers check on d6 you would write 'Bd6+' or if the queen delivers checkmate on g7 you would write Qg7#.</p>
                <br></br>
                <h2 className="text-3xl font-mono">Practice Problems</h2>
                <br></br>
                <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[0].id} />
                <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[1].id} />
                <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[2].id} />
                <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[3].id} />
                <PracticeProblem answerkey={answerkey} userInput={userInput} id={answerkey[4].id} />
            </div>
            <div className="w-1/5 lg:block mr-20 ml-0 mt-40 text-lg hidden">
                <p className='font-mono text-3xl'>Contents</p>
                <br></br>
                <p className='font-mono text-2xl'>1. How do you play chess?</p>
                <br></br>
                <p className='font-mono text-xl'>- Piece Movement</p>
                <br></br>
                <p className='font-mono text-xl'>- Rules</p>
                <br></br>
                <p className='font-mono text-2xl'>2. How do you win?</p>
                <br></br>
                <p className='font-mono text-xl'>- Common Mating Patterns for Beginners</p>
                <br></br>
                <p className='font-mono text-2xl'>3. How does a draw happen?</p>
                <br></br>
                <p className='font-mono text-xl'>- Insufficient material</p>
                <br></br>
                <p className='font-mono text-xl'>- Stalemate</p>
                <br></br>
                <p className='font-mono text-xl'>- Threefold Repetition</p>
                <br></br>
                <p className='font-mono text-2xl'>4. Understanding Piece Value</p>
                <br></br>
                <p className='font-mono text-2xl'>5. Practice Problems</p>
                <br></br>
                <p className='font-mono text-2xl'>6. Answer Key</p>
            </div>
        </div>
    </div>
    )
}

export default Post1