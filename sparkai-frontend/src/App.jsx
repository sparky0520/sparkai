import { Route, Routes } from "react-router-dom";
import Footer from "./views/partials/Footer";
import Navbar from "./views/partials/Navbar";
import Protected from "./views/Protected";
import Unprotected from "./views/Unprotected";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          {/* Wildcard '*' used to get nested routes like /auth/signup */}
          <Route path="*" element={<Protected />} /> {/* protected route */}
          <Route path="/auth/*" element={<Unprotected />} />{" "}
          {/* unprotected route */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
