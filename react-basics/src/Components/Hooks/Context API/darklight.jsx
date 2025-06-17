import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const DarkLightTheme = () => {
    const { theme, handleToggleTheme } = useContext(ThemeContext);

    return (
        <div
            className={`px-4 flex-col justify-center items-center ${
                theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <h1>Welcome to switch theme</h1>
            <button onClick={handleToggleTheme} style={{ marginTop: "1rem" }}>
                {theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            </button>
        </div>
    );
};