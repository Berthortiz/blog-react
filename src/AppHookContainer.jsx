import App from "./App";
import AppRouter from "./AppRouter";

export default function AppHookContainer() {
    return (
        <>
            {/* Glogalporviders */}
            <AppRouter>
                <App></App>
            </AppRouter>
        </>
    )
}