
import { useDataContext } from "./contextindex"


export const Home = () =>{

    const {name,age} = useDataContext(); //getting data from the DataContext to use it in the home component
    return(
        <>
        <h1>Hello I am {name}.My age is {age} and I am learning to use Context API.</h1>
        </>
    )
}