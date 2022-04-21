import { Route, Routes } from "react-router-dom";
import Login from "../features/Auth/Login";

const Routing = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
    </Routes>
  );
};

export default Routing;
