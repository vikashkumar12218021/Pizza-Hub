import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Overview from "./pages/Overview";
import Orders from "./pages/Orders";
import { OrderProvider } from "./pages/OrderContext";
import OrderDetails from "./pages/Details";

function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
