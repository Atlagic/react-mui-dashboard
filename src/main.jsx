import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication.jsx";
import Database from "./pages/Database/Database.jsx";
import Functions from "./pages/Functions/Functions.jsx";
import Hosting from "./pages/Hosting/Hosting.jsx";
import MachineLearning from "./pages/MachineLearning/MachineLearning.jsx";
import Storage from "./pages/Storage/Storage.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { dashboardTheme } from "./dashboardTheme.jsx";

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={dashboardTheme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="authentication" element={<Authentication />} />
                    <Route path="database" element={<Database />} />
                    <Route path="functions" element={<Functions />} />
                    <Route path="hosting" element={<Hosting />} />
                    <Route path="machine-learning" element={<MachineLearning />} />
                    <Route path="storage" element={<Storage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
