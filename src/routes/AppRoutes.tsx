import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to My Portfolio</h1>} />
      <Route path="/projects" element={<h1>Projects</h1>} />
      <Route path="/behind-the-scenes" element={<h1>Behind the Scenes</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
