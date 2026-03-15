import { BrowserRouter } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-brand-black min-h-screen">
        <CustomCursor />
        <Navbar />
        <div className="h-16" />
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
