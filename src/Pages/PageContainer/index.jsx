import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
function PageContainer() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default PageContainer;
