const Events = () =>{

    const handleClick = (event) =>{
        alert("Hello this is Archer");
        console.log(event);
    }
   
    const handleTouch = (user) =>{
        alert(`Hi I am ${user}`);
    }
    return(
        <>
        <div>
         {/*Function handling with Named Functions*/}
        <button onClick={handleClick} className="bg-amber-200 px-3 py-3 flex flex-col align-middle shadow-2xs" >Click me</button>
        {/* <button onClick={handleClick()} className="bg-amber-200 px-3 py-3 flex flex-col" >Click me</button> This is not possible as we are passing the funtion totally which violates the rule of passing a reference and for that the function will be called before the button is pressed*/}
        {/* Using Arror Function we have to pass the function only  */}
        <button onClick={()=>handleClick()} className="bg-green-200 px-3 py-3 flex flex-col align-middle shadow-2xs" >Click me 2</button>
         {/* <button onClick={handleTouch()} className="bg-amber-200 px-3 py-3 flex flex-col align-middle shadow-2xs" >Click me</button> For this case we cannot use this beacuse we cannot return a function in first hand */}
        <button onClick={(event)=>handleTouch("Knight")} className="bg-red-200 px-3 py-3 flex flex-col align-middle shadow-2xs" >Click me 3</button>

        </div>
        </>
    )
}

export default Events;