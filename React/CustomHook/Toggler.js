import React, {useState} from "react"

function Toggler(defaultOnValue=false) {
   const [on,setOn] = useState(defaultOnValue)
    
  
    function toggle() {
        setOn(prevState =>  !prevState)
    }
    
  
        return{on,toggle}
   
}

export default Toggler