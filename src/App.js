import { useState } from "react"
import "./App.scss"
import { useEffect } from "react"
import Navbar from "./components/Navbar/index.jsx"
import Footer from "./components/Footer/index.jsx"
import { Routes, Route } from "react-router-dom"
import Welcome from "./components/Welcome/index.jsx"

function App() {
    // funzione che cambia il tema chiaro/scuro in base a quello impostato dal dispositivo
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark")
        setIsDarkMode(darkModeQuery.matches)

        const handleThemeChange = (event) => {
            setIsDarkMode(event.matches)
        }

        darkModeQuery.addEventListener("change", handleThemeChange)
        return () => {
            darkModeQuery.removeEventListener("change", handleThemeChange)
        }
    }, [])
    return (
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Welcome />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </div>
    )
}

export default App
