import { Outlet } from "react-router-dom"
import Header from "../components/Header"


const Layout_Main = () => {
  return (
    <div>
        <Header/>
        <Outlet />
    </div>
  )
}

export default Layout_Main
