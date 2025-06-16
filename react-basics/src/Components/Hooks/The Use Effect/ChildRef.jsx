import { useId } from "react"


export const Child_Ref =  ({label,ref}) =>{

     const id = useId();
    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input type="text" ref={ref}></input>
        </>
    )
}