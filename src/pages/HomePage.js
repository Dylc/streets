// import { Outlet } from "react-router-dom";

import { styled } from "@mui/material/styles";

const HomeImageBackground = styled("div")`
  height: 100%;
  width: 100%;
  background: url(/modiin_view.jpeg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
export default function HomePage() {
  return <HomeImageBackground />;
}
