import { useLoaderData, useParams } from "react-router"

export const SkillsDetails = () =>{

    const value = useLoaderData();
    const params= useParams();
    console.log(params.skillID)

    const {img_src,camera,rover,full_name,launch_date,name,photos} = value;
     
    return(
        <>
        <div>
            <img src={img_src} alt={camera.full_name} />
            <h3 className="bg-amber-200">{rover.name}</h3>
            <h3 className="bg-amber-200">{value.id}</h3>
            <h3 className="bg-amber-200">{rover.launch_date}</h3>
            <h3 className="bg-amber-200">{rover.full_name}</h3>
        </div>
        </>
    )
}