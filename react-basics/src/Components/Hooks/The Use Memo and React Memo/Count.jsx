import { useRef } from "react"
import { memo } from "react";


export const Counts = memo(({data}) =>{

    const  reactCounter = useRef(0);

    return (
        <>
        
            <p>The component has been rendered for :</p>
            <br />
            <h3>{reactCounter.current++}</h3>
            <br />
            <h3>My name is : {data.name}</h3>
            
        
        </>
    )
})
