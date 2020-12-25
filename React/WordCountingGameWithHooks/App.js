/**
 * Challenge: build the basic structure of our game
 * 
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */

 import React ,{useState,useEffect,useRef} from "react"

 function App(){
     const maxTime=5
     const [text,setText]=useState("");
     const [timeRemaining,setTimeRemaining]=useState(maxTime);
     const [isTimeRuning, setIsTimeRuning]=useState(false);
     const [wordCount, setWordCount]=useState(0)
     const inputRef=useRef(null)

     function handleChange(event){
        setText(event.target.value)
     }
     function clockStart(event){
    
        setIsTimeRuning(true)
        setTimeRemaining(maxTime);
        setWordCount(0)
        setText("")
        // code is runing async that why we have to make the text area no disbale before focus
        inputRef.current.disabled = false
        inputRef.current.focus();

     }

    

     useEffect(()=>{
         if(isTimeRuning && timeRemaining>0){
         setTimeout(()=>{
            setTimeRemaining(timeRemaining-1)
         },1000)
        }else{
            setIsTimeRuning(false)
            const wordLength=text.trim().split(" ")
            setWordCount(wordLength.filter(word=>word!==" ").length)

        }

     },[timeRemaining,isTimeRuning])

  console.log(text)
    return(<div>
        <h1>Test your word typing speed</h1>

        <textarea  ref={inputRef} name="text" value={text} onChange={handleChange} disabled={!isTimeRuning}/>
        <h4>Time Remaining:{timeRemaining} </h4>
        <button onClick={clockStart} disabled={isTimeRuning}>Start</button>
        <h1>Word count:{wordCount} </h1>

    </div>)

 }

 export default App