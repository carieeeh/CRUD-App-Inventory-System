import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer";
import Add from "./pages/Add";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Update from "./pages/Update";
import AboutUs from "./pages/AboutUs";
import Inventory from "./pages/Inventory";
import UpdateStocks from "./pages/UpdateStocks";
import "./style.css";
import "@fontsource/roboto/400.css";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <div
          className="navbar"
          style={{
            width: "100vw",
            overFlow: "hidden",
            zIndex: "900",
          }}
        >
          <Navbar />
        </div>
        <div
          className="routes"
          style={{
            textAlign: "center",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/mainbg.png"})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            fontFamily: "'Segoe UI', Tahoma, Verdana, sans-serif",
            width: "100%",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/Add" element={<Add />}></Route>
            <Route path="/UpdateStocks/:id" element={<UpdateStocks />}></Route>
            <Route path="/Update/:id" element={<Update />}></Route>
            <Route path="/Inventory" element={<Inventory />}></Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
