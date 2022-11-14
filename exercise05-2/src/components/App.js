import React from "react";

// コメントをヒントにAppクラスを完成させてください
// ※ヒントコメント以外のところも書かないとプログラムが正常動作しません
export default class App extends React.Component {
    makeValue(current, number) {
        // 入力は15桁まで（それ以上は無視）
        if (current.toString().length == 15) {
            return current;
        }

        // 現在値を10倍して（桁を一つ上げて）numberを足す
        return current * 10 + number;
    }

    handleNumberClick(number) {
        // makeValueメソッドを使って新しい値を作る
        // 新しい値をstateのvalueに設定する
    }

    handleResetClick() {
        // stateのvalueを0に設定する
    }

    render() {
        const numberButtons = [];
        for (let i = 0; i < 10; i++) {
            numberButtons.push(
                // ボタンがクリックされたときにhandleNumberClickが呼ばれるようにする
                <NumberButton key={i} number={i} />
            );
        }
        return (
            <div className="app">
                {/* NumberLineにはstateのvalueを渡す */}
                <NumberLine value={0} />
                <div>
                    {numberButtons}
                </div>
                <div>
                    {/* ボタンがクリックされたときにhandleResetClickが呼ばれるようにする */}
                    <ResetButton />
                </div>
            </div>
        );
    }
}
