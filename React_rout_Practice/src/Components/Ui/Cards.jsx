import { NavLink } from "react-router";

export const Cards = ({ item }) => {

    const { img_src, camera, full_name,id} = item;
    return (
        <>
            <div style={{ border: '1px solid #ccc', padding: '16px', margin: '25px', borderRadius: '8px', marginTop: '60px' }}>
                <img src={img_src} alt={full_name} width={200} />
                <NavLink to={`/skills/${id}`}>
                    <button className="bg-amber-500">Get details</button>
                </NavLink>
            </div>
        </>
    )
}