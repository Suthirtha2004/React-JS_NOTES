import FirstData from "../api/FirstData.json"
import { Tech_Cards } from "./Techcards"

//Use of .map() function instead of for loops


export const Gadgets = () =>{
    let idx;
    return (
    <ul>
        {FirstData.map((currentEle,idx)=>( <Tech_Cards key={currentEle._id || idx} data = {currentEle}    />) 
        
   )}
    </ul>
    )
}

