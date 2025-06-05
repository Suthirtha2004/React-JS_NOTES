import FirstData from "../api/FirstData.json"
//2-destructing of props
export const Tech_Cards = ( {data}) =>{
    const {_id,title,description,image,ratings,category} = data;
    let idx;
    return(
            <li>
        <div>
            <img src={image} alt=" "
              height= "40%"
              width= "40%"    
            />
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>{ratings}</h3>
            <a href={category} target="_blank">
                <button>Know More</button>
            </a>
        </div>
        </div>
        </li>
        )
}

//There are two methods of props destructuring in JSX
// 1.
// export const Tech_Cards = (props) =>{
//     const { data } = props;
//     let idx;
//     return(
//             <li>
//         <div>
//             <img src={data.image} alt=" "
//               height= "40%"
//               width= "40%"    
//             />
//         <div>
//             <h1>{data.title}</h1>
//             <p>{data.description}</p>
//             <h3>{data.ratings}</h3>
//             <a href={data.category} target="_blank">
//                 <button>Know More</button>
//             </a>
//         </div>
//         </div>
//         </li>
//         )
// }
