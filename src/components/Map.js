import { styled } from "@mui/material/styles";

const Box = styled("div")`
  z-index: 1;
  position: fixed;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export function Map({ children }) {
  return <Box>{children}</Box>;
}

export default Map;
