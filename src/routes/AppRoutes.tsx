import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<h1>Projects</h1>} />
      <Route path="/behind-the-scenes" element={<h1>Behind the Scenes</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
