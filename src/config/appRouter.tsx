import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import MainLayout from "../components/MainLayout";
import TableReservation from "../pages/TableReservation";
import EventBooking from "../pages/EventBooking";



export default function AppRouter() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route element={<MainLayout />}>

                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />

                </Route>                
                <Route path="/eventplan" element={<EventBooking />} />


                <Route path="/tablereserve" element={<TableReservation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

            </Routes>

        </BrowserRouter>
    </>
}