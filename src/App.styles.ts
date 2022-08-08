import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Box = styled(Paper)`
  display: flex;
  margin: 10px;
  padding: 20px;
`;
export const Header = styled(Box)`
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
