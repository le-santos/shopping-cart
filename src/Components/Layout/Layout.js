import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "../Header/Header";
import TotalBox from "../TotalBox/TotalBox";

export default function Layout({ ...props }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>{props.children}</main>
      <TotalBox total={"9,21"} />
    </React.Fragment>
  );
}
