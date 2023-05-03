import {Theme} from '../types';
import React from "react";

export const ThemeContext = React.createContext<Theme>(
    {
        isDark: false,
        black: {backgroundColor: "black", color: "white"},
        white: {backgroundColor: "white", color: "black"}
    }
);

export default function ThemeContextProvider(props:{children:React.ReactNode}) {
    const [theme, setTheme] = React.useState<Theme>({
        isDark: false,
        black: {backgroundColor: "black", color: "white"},
        white: {backgroundColor: "white", color: "black"}
    });
    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={() => setTheme({...theme, isDark:!theme.isDark})}>Color</button>
            {props.children}
        </ThemeContext.Provider>
    )
}

