import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Homepage;
