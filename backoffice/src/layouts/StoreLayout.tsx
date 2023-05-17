import { Outlet } from "react-router-dom";

import { Footer, MiniNav, Navbar } from "@/components/commons";

const StoreLayout = () => {
  return (
    <div className="goto-here">
      <MiniNav />
      <Navbar />
      {/* <!-- END header --> */}

      <Outlet />
      {/* <!-- END content --> */}

      <Footer />
      {/* <!-- END footer --> */}
    </div>
  );
};

export default StoreLayout;
