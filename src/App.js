import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/add-task" element={<h1>Add Tasks</h1>} />
                <Route path="/priorities" element={<h1>Priorities</h1>} />
                <Route path="/categories" element={<h1>Categories</h1>} />
                <Route path="/status" element={<h1>Status</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;