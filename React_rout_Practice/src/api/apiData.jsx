export const getApiData = async() =>{
        const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=WtiR6AZV3vb48MDiPR3qshStNGtYlAcsGQqeM7Xf"
        try{
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }catch(error){
            console.log("Error fetching data");
            return null;
        }
        
};