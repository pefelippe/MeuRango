import { ThemeProvider } from "@/components/theme/theme-provider";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'sonner';

import { router } from "./routes";

import './index.css';

function App() {
    return(
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HelmetProvider>
            <Helmet>
                <title>Shopping app</title>
            </Helmet>
            <Toaster richColors />
            <RouterProvider router={router}/>
        </HelmetProvider>
        </ThemeProvider>
    )
}

export default App
