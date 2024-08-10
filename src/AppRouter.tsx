import { BrowserRouter, Route, Routes,  } from "react-router-dom"
import Layout_Main from "./Layouts/Layout_Main"
import Index from "./pages/Index"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout_Main />}>
                <Route path="/" element={<Index/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter
