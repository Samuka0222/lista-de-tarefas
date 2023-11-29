import ThemeCarousel from "./ThemeCarousel";

const Aside = ({ isVisible }) => {
    return (
        <nav className={`text-gray-200 ${isVisible === false ? 'hidden' : 'block'} w-5/12 h-full fixed right-0 top-16 z-10 bg-neon-complementarDark rounded-xl`}>
            <ul className="flex flex-col items-center w-full">
                <li>
                    <h3>Login | Cadastro</h3>
                </li>
                <li className="w-11/12">
                    <h3>Alterar tema:</h3>
                    <ThemeCarousel />
                </li>

                <li>
                    Tocar música relaxante?
                </li>
                <li>
                    <h3>Projetado por:</h3>
                    <a href="#">@samuka0222</a>
                </li>
            </ul>
        </nav>
    )
}

export default Aside;