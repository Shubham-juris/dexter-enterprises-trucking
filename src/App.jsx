import "./App.css";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import AppRoutes from "./AppRoute/AppRoutes";
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
