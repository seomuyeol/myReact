import React from "react";
import ReactDom from "react-dom";
/*
const element1 = React.createElement("h1", {}, "はじめての React");
ReactDom.render(
    element1,
    document.getElementById("root")
);
*/


const element =
<div>
    <h1>はじめての React</h1>
    <p>このページは React で作成されています。</p>
</div>
ReactDom.render(
    element,
    document.getElementById("root")
);