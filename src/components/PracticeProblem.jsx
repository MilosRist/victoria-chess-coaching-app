import { useState } from 'react'

const PracticeProblem = (props) => {

    const [userInput, setUserInput] = useState('')
    const [response, setResponse] = useState('')

    /* const correct = 'Correct!'
    const wrong = 'Wrong! Try Again!' */
    
    const addAnswer = (event) => {
        event.preventDefault()
        setUserInput('')
        if (userInput === props.answerkey[props.id].answer) {
            setResponse('Correct!')
            return(response)
        } else {
            setResponse('Wrong. Try Again!')
            return(response)
        } 
    }

    const answerCheck = (event) => {
        setUserInput(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="flex mb-10" >
            <img src={props.answerkey[props.id].image} className="w-1/2 flex" />
            <div className="w-1/2 justify-center items-center flex flex-col">
                <p className="font-mono mb-5">{props.answerkey[props.id].text}</p>
                <form className="w-1/2 justify-center text-center font-mono" onSubmit={addAnswer}>
                    <div>
                        <input value={userInput} onChange={answerCheck} className="bg-gray-100 border border-gray-700 w-20 mb-5 rounded-full text-center" />
                    </div>
                    <div>
                        <button type="submit" className="bg-gray-100 hover:bg-gray-200 border border-gray-700 p-2 mb-5 rounded-lg" >CHECK</button>
                    </div>
                </form>
                <p className='font-mono'>{response}</p>
            </div>
        </div>
    )
}

export default PracticeProblem
