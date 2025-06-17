


export const Parent_Component= () =>{

    return(
        <>
        <Child_component data="Archer" />
        </>
    )
}

const Child_component= (props) =>{

    return(
        <>
        <GrandChild_component data={props.data} />
        </>
    )
}

const GrandChild_component = (props)=>{

    return(
        <>
       < GrandGrandChild_component data={props.data} />
        </>
    )
}

const GrandGrandChild_component =(props) =>{
    return(
        <>
        <h1>Hello this is {props.data}</h1>
        </>
    )
}