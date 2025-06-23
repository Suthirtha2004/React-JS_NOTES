import { useNavigate } from "react-router"

export const ErrorPage = () =>{
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(-1);
    }
    return(
        <>
        <h1 className="bg-white">Error Page = 404</h1>
        <button className="bg-amber-600 rounded-2xl shadow-2xs px-1.2 py-1.2"
          onClick={handleNavigate}
        >Go Back</button>
        
        </>
    )
}