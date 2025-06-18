import { useReducer } from "react"

 

export const Reduce_comp = () =>{

    const InitialState ={
        count: 0,
        in : 2,
        dec : 2,
    }
    const Reducer =(state,action)=>{

        console.log(action);

        switch(action.type){
            case "INCREMENT" :
                return {...state,count:state.count + 1};
            
            case "DECREMENT" :
                return {...state,count:state.count - 1};

            case "RESET" :
                return {...state,count : 0};

            default :
                return state.count;
        }
    }
    // const Reducer = (state,action) =>{
    //     if(action.type === "INCREMENT"){
    //         return state+1;
    //     }

    //     if(action.type === "DECREMENT"){
    //         return state-1;
    //     }
    //     return state;
    // }

    const[state,dispatch] = useReducer(Reducer,InitialState);
    
    
    return(
        <>
        <div className="px-4 flex flex-col justify-center items-center">
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type : "INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type : "DECREMENT"})}>Decrement</button>
            <button onClick={()=>dispatch({type : "RESET"})}>RESET</button>
        </div>
        </>
    )
}