import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../component/navbar";
import { AnimatePresence } from "framer-motion";

const IndexPage = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </>
  );
};

export default IndexPage;
