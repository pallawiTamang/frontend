import { useEffect, useState  } from "react"

function LearningUseEffect(){
    //typr 1 of useEffect hook
    useEffect(()=>{
       console.log("Hello world haha")
        //fetch courses from backend -get -localhost:3000/api/books
    },[])

    //type 2 of useEffect hook
    const [number,setNumber] = useState(0)
    const [number2,setNumber2] = useState(100)
    function increaseNumber(){
        setNumber(number + 1)
        //number++, number= number + 1
    }
    function increaseNumber2(){
        setNumber2(number2 + 1)
    }
    useEffect(()=>{
      console.log("useEffect triggred!!")  
    },[number,number2])//component/page load huda trigger hune nahi vayo + number vanne state ma change huda ni 
    //useEffect(fn,[])

    //type 3 of useEffect
    useEffect(()=>{
        console.log("Type 3 useEffect triggered")
    })//excutes everytime wherever state changes + on page load/component load
    return (
        <div>
        <h1>I am learning use effect hook today!</h1>
        <h3>{number}</h3>
        <button onClick={increaseNumber}>change number 1 +</button>
        <h3>{number2}</h3>
        <button onClick={increaseNumber2}>change number 2 +</button>
        </div>
    )
}

export default LearningUseEffect