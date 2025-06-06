

export const EventPropagate = () => {
    const handleBoss = () =>{
        console.log("Hello I am boss");
    }

    const handleManager = () =>{
        console.log("Hello I am Manager");
    }

    const handleEmployee = (event) =>{
        console.log(event);
        event.stopPropagation();
        console.log("Hello I am Employee");
    }
    return(
        <>
        <div className="boss-div" onClickCapture={handleBoss} >
            <div className="manager-div" onClickCapture={handleManager}>
                <button className="employee-div" onClickCapture={handleEmployee}> 
                    Click this
                </button>
            </div>
        </div>
        </>
    )
}

//So basiaclly the case of event bubbling is occuring and that is calling the child div the parent elements are also being called.
// Ok so by the help of stopPropagation we stopped it what if we want to do Capturing that is from top to bottom
// By the help of onClickCapture we did it we captured the events.