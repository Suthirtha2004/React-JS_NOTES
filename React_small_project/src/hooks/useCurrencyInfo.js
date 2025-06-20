import {useState,useEffect} from "react"


// function hello(){
//     return []   This also returns an array so it can be a custom hook
// }

function useCurrencyInfo(currency){
    const[data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    },[currency])

    console.log(data);

    return data
}

export default useCurrencyInfo;