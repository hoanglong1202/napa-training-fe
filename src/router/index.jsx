import { Route, Routes } from "react-router-dom";
import Login from "../features/Auth/Login";
import Dashboard from "../features/Dashboard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
};

export default Routing;
