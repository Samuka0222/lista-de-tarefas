import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)
    
    return (
        <div>
            <h1>Opa!</h1>
            <h2>Não tem nada para ver aqui...</h2>
            <p>Verifique a URL e veja se acessou um link válido.</p>
            <i>{error.statusText || error.message}</i>
        </div>
    )
}

export default ErrorPage;