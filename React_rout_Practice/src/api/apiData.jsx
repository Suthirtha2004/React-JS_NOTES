export const getApiData = async({params}) =>{
    //  console.log(params);
     
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${import.meta.env.VITE_API_KEY}`
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            return data;
        }catch(error){
            console.log("Error fetching data");
            return null;
        }
        
};