import App from "./App";
import AppRouter from "./AppRouter";
import { HelmetProvider } from "react-helmet-async";

export default function AppHookContainer() {
    return (
        <>

            <HelmetProvider>
                {/* Glogalporviders */}
                <AppRouter>
                    <App></App>
                </AppRouter>
            </HelmetProvider>
        </>
    )
}