import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import Homepage from "./pages/home";
import { Productlist } from "./pages/home/component/Productlist";
import ServiceTabs from "./pages/home/component/ServiceTabs";
import { ClientManagement } from "./pages/home/component/ClientsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route element={<Homepage />}>
            <Route index element={<Productlist />} />
            <Route path="/home/our-services" element={<ServiceTabs />} />
            <Route path="/home/our-clients" element={<ClientManagement />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
