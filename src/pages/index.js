import React from "react";
import Header from "../components/Header/Header";
import { useEffect } from "react";
const IndexPage = () => {
  useEffect(() => {
    document.getElementsByTagName("html")[0].className += " js";
  }, []);
  return (
    <Header />
  )
}

export default IndexPage
