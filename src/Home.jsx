import { useState } from "react"


function Home(){
    
 const [number,setNumber] = useState(1000) //[0,f]

function increaseMyValue(){
        setNumber(number +1)
}
function decreaseMyValue(){
    setNumber(number -1)
}
return(
    <div>
    <h1>{number}</h1>
    <button onClick={increaseMyValue}></button>
    <button onClick={decreaseMyValue}></button>
    </div>
)
}

export default Home