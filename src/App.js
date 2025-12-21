import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import AddTask from "./Pages/AddTask";
import Priorities from "./Pages/Priorities";
import Categories from "./Pages/Categories ";
import Status from "./Pages/Status";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-task" element={<AddTask />} />
                <Route path="/priorities" element={<Priorities />} />
                <Route path="/categories" element={<Categories />} /> 
                <Route path="/status" element={<Status />} />
            </Routes>
        </BrowserRouter>
    );
} 

export default App;
