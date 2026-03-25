import { BrowserRouter } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <main >
        <CustomCursor />
        <Navbar />
        <div className="h-16" />
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
