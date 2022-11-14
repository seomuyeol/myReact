import React from "react";
import ReactDOM from "react-dom";

class SelfIntroduction extends React.Component {
    // SelfIntroductionクラスを正しく動作するように作成してください
    render() {
        return(
            <div>初めまして、私の名前は{this.props.name}です。<br/>
            出身は{this.props.birthplace}です。
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <SelfIntroduction name={"Win太郎"} birthplace={"京都府"} />
        <SelfIntroduction name={"PC花子"}  birthplace={"神奈川県"} />
    </div>,
    document.getElementById("root")
);
