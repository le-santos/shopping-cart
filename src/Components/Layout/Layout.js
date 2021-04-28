import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "../Header/Header";

export default function Layout({ ...props }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>{props.children}</main>
    </React.Fragment>
  );
}
