import { styled } from "@mui/material/styles";

const Box = styled("div")`
  z-index: 1;
  position: fixed;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: white;
`;

export default function Container({ children }) {
  return <Box>{children}</Box>;
}
