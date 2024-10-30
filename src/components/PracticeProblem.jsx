import { useState } from 'react'

const PracticeProblem = (props) => {

    const [response, setResponse] = useState('')
    const answers = props.answerkey[props.id].answer
    const[inputs, setInputs] = useState(Array(answers.length).fill(""))
    const opponents = props.answerkey[props.id].opponent

    const handleInputChange = (index, event) => {
        event.preventDefault()
        const newInputs = [...inputs]
        newInputs[index] = event.target.value
        setInputs(newInputs)
        console.log(newInputs)
    };

    const addAnswer = (event) => {
        event.preventDefault()
        const newInputs = [...inputs]
        console.log(newInputs)
        const answers = props.answerkey[props.id].answer
        console.log(answers)
            for (let i=0; i < answers.length; i++) {
                if(newInputs[i].toLowerCase() !== answers[i]) {
                    setResponse('Wrong. Try Again!')
                    setInputs(Array(answers.length).fill(""))
                    return(response)
                } else {
                    setResponse('Correct!')
                    setInputs(Array(answers.length).fill(""))
                    return(response)
                }
            }
    }

    return (
        <div className="flex mb-10" >
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
                            {index+1}. <input 
                                type="text" 
                                value={input} 
                                onChange={(e) => handleInputChange(index, e)} 
                                className="bg-gray-100 border border-gray-700 w-20 mb-5 rounded-full text-center ml-2" 
                            /> <div className="w-20 mb-5 pr-2 pl-2 ml-5 text-center">
                                <p>
                                    {opponents[index]}
                                </p>
                                </div>
                    </div>))}
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
