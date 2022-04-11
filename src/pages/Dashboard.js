import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./home/Home";
import Characters from "./characters/Characters";
import Locations from "./locations/Locations";
import Episodes from "./episodes/Episodes";


const Dashboard = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/episodes" element={<Episodes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Dashboard;
