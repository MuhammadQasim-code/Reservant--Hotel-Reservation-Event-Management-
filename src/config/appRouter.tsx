import { Route , Routes , BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import MainLayout from "../components/MainLayout";



export default function AppRouter(){
    return<>
        <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>

            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>

            </Route>
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>

        </Routes>
        
        </BrowserRouter>
    </>
}