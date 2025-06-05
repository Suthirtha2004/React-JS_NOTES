import FirstData from "../api/FirstData.json"

//Use of .map() function instead of for loops


export const Gadgets = () =>{
    let idx;
    return (
    <ul>
    
        {FirstData.map((currentEle,idx)=>  { 
        return(
            <li key={currentEle._id || idx} >
        <div>
            <img src={currentEle.image} alt=" "
              height= "40%"
              width= "40%"    
            />
        <div>
            <h1>{currentEle.title}</h1>
            <p>{currentEle.description}</p>
            <h3>{currentEle.ratings}</h3>
            <a href={currentEle.category} target="_blank">
                <button>Know More</button>
            </a>
        </div>
        </div>
        </li>
        )
 } )}
    </ul>
    )
}

