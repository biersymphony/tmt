import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import PrototypeDesignLabPage from "./pages/capabilities/PrototypeDesignLab";
import MachineManufacturingPage from "./pages/capabilities/MachineManufacturing";
import PrecisionToolsPage from "./pages/capabilities/PrecisionTools";
import IndustrialFabricationPage from "./pages/capabilities/IndustrialFabrication";
import RoofingSolutionsPage from "./pages/capabilities/RoofingSolutions";
import LaserCncVmcPage from "./pages/capabilities/LaserCncVmc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capabilities/prototype-design-lab" element={<PrototypeDesignLabPage />} />
        <Route path="/capabilities/machine-manufacturing" element={<MachineManufacturingPage />} />
        <Route path="/capabilities/precision-tools-auto-components" element={<PrecisionToolsPage />} />
        <Route path="/capabilities/industrial-fabrication" element={<IndustrialFabricationPage />} />
        <Route path="/capabilities/roofing-solutions" element={<RoofingSolutionsPage />} />
        <Route path="/capabilities/laser-cnc-vmc-job-work" element={<LaserCncVmcPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
