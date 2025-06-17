import { useEffect, useState } from "react";
import "./space.css";

export const SpaceTech = () => {
    const [apiData, setApiData] = useState(null);
    const [theme, setTheme] = useState("light");

    const handleToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const API =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=WtiR6AZV3vb48MDiPR3qshStNGtYlAcsGQqeM7Xf";

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => setApiData(data))
            .catch((error) => {
                console.log("Error in fetching", error);
                setApiData({ photos: [] });
            });
    }, []);

    if (!apiData) {
        return <h1>Loading....Please wait</h1>;
    }

    return (
        <div className={`space-container ${theme}`}>
            <h1>THE SPACE HUB</h1>
            {apiData.photos && apiData.photos.slice(0, 5).map((item) => (
                <ul key={item.id}>
                    <li>
                        <img src={item.img_src} alt={item.camera.full_name} />
                        <h3>{item.camera.full_name}</h3>
                    </li>
                </ul>
            ))}
            <button onClick={handleToggleTheme}>
                {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            </button>
        </div>
    );
};