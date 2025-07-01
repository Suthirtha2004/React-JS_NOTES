


export const Card =({item})=>{

    const {category,setup} = item;
    return(
        <>
        <h2>{category}</h2>
        <h2>{setup}</h2>
        </>
    )
}