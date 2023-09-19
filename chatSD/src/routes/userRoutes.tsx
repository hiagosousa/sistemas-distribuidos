import { Route, Routes } from "react-router-dom";
import App from "../App";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/home" element={<Home />} /> */}
    </Routes>
  );
}
export default UserRoutes;
