import React, { Suspense, lazy, useState } from "react";
import Sidebar from "./Sidebar";
// import Brand from "./Brand";
const Brand = lazy(() => import("./Brand"));

function Main({data}) {
  const [sizeFilter, setSizeFilter] = useState([])
  return (
    <main>
      <section>
        <div className="container">
          <div className="d-flex flex-wrap">
            <Sidebar sizeFilter={sizeFilter} setSizeFilter={setSizeFilter} data={data} />
            <Suspense fallback={<div>Product Loading...</div>}>
              <Brand data={data} sizeFilter={sizeFilter} setSizeFilter={setSizeFilter} />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
