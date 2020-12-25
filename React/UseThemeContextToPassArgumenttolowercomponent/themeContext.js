import React, {useState} from "react"
const ThemeContext = React.createContext()

/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

function ThemeContextProvider(props) {

    const [theme,setTheme]=useState("dark")
   
 
   
    
    function toggleTheme() {
        setTheme(prevState => prevState === "light" ? "dark" : "light")
            
        
    }
    
        return (
            <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        )
   
}

export {ThemeContextProvider, ThemeContext}
