export const Cards = ({item}) =>{

    const {img_src,full_name,camera,id} =item;
    
    return(
        <>
        <div>
            <h3 className="text-white">Id of the image: {id}</h3>
            <br />
            <h3 className="text-white">Full name of the image:{camera.full_name}</h3>
            <br />
            <img src={img_src} alt={full_name} width={200}/>
        </div>
        </>
    )
}