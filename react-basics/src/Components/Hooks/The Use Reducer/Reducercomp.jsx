import { useReducer } from "react"

 const Reducer = (state,action) =>{
        if(action.type === "INCREMENT"){
            return state+1;
        }

        if(action.type === "DECREMENT"){
            return state-1;
        }
        return state;
    }

export const Reduce_comp = () =>{
    const[count,dispatch] = useReducer(Reducer,0);
    
    
    return(
        <>
        <div className="px-4 flex flex-col justify-center items-center">
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type : "INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type : "DECREMENT"})}>Decrement</button>
        </div>
        </>
    )
}