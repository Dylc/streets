import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";

// routing
import routes from "routes";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
