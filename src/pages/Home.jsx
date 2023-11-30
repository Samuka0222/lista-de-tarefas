import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Dialog from "../components/Dialog";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
    const [dialogOpen, setDialogOpen] = useState(true)
    const { theme, changeTheme } = useContext(ThemeContext)

    const toggleDialog = () => {
        setDialogOpen(!dialogOpen)
        console.log('clicou no botão')
    }


    return (
        <div className={`h-screen w-screen flex flex-col items-center bg-gradient-to-br from-${theme}-dark to-${theme}-bg font-roboto text-gray-200`}>
            <NavBar
                toggleDialog={toggleDialog}
            />
            <button onClick={() => changeTheme('sunset')}>O tema atual é {theme}</button>
            <Dialog
                status={dialogOpen}
            />
            <Outlet />

        </div>
    )
}

export default Home;