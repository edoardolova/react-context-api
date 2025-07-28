import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AlertComponent from "../components/AlertComponent"
export default function DefaultLayout(){
    return(
        <>
        
            <Header/>
            <AlertComponent/>
            <Outlet/>
            <Footer/>
        </>
    )
}