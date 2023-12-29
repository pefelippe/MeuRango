import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from "react-router-dom";
// import './App.css';
import './index.css';
import { router } from "./routes";

function App() {
    return(
        <HelmetProvider>
            <Helmet>
                <title>Shopping app</title>
            </Helmet>
            <RouterProvider router={router}/>
        </HelmetProvider>
    )
}

export default App
