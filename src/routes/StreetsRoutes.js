import { StreetPage } from "pages";
import React from "react";
import { getStreet } from "store/streets";
// import Loadable from "ui-component/Loadable";

const StreetsRoutes = {
  path: "/streets/:id",
  element: <StreetPage />,
  loader: getStreet,
};

export default StreetsRoutes;
