import { useLoaderData, useParams } from "react-router-dom"
import { Cards } from "../Components/Ui/Cards";
export const Skills = () =>{
    const skillsData = useLoaderData();
    console.log(skillsData);
    return(
        <>
        <div>
            <ul>
               {skillsData && skillsData.photos.slice(0,10).map((item) => (
    <Cards key={item.id} item={item} />
))}
            </ul>
        </div>
        </>
    )
}