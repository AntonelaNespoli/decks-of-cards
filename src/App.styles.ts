import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Box = styled(Paper)`
  display: flex;
  margin: 10px;
  padding: 20px;
`;
export const Header = styled.div`
  display:inline-flex;
  flex-wrap: wrap;
  gap: 15px;
  width:100%;
`;
export const CardBox = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: auto;
  margin: 10px;
  min-width:200px;
  padding: 20px;
`;
