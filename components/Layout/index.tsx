import { Container } from "native-base";
import React from "react";
import { Layout as LayoutType } from "./types";
import { layoutStyles } from "./styles";

const Layout = ({ children }: LayoutType) => (
  <Container {...layoutStyles}>{children}</Container>
);

export default Layout;
