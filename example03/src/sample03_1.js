import React from "react";
import ReactDom from "react-dom";

const element1 = React.createElement("h1", {}, "はじめての React");
ReactDom.render(
    element1,
    document.getElementById("root")
);
