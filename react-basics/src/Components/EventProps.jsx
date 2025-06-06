

export const Event_props = ()=>{
    const handleEntry = (user) => {
        alert(`Hello I am ${user}`);
    } 
    
    const handleHover = () =>{
        alert("it has rained today");
    }
    return(
        <>
        < HelloUser onButtonClick ={()=>handleEntry("Archer")}
         onHoverEfffect={handleHover} />
        </>
    )
}

const HelloUser = (props) =>{
     const {onButtonClick , onHoverEfffect} = props; //Using destructing and then using the objects

    const handleNew = () =>{
        alert("The Moonknight Series is Awesome");
        onButtonClick;
    }

    return(
        <>
        <button onClick={onButtonClick} className="bg-amber-500">Click Here</button>
        <button onMouseEnter={onHoverEfffect} className="bg-green-500">Click Here</button>
        <button onClick={handleNew} className="bg-blue-400">Click Here</button>

        </>
    )
}