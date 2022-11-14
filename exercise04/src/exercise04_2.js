import React from "react";
import ReactDOM from "react-dom";

// Counterクラスを正しく動作するように作成してください
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        let msg;
        if (this.state.count == 0) {
            msg = "Let`s start!";
        } else if (this.state.count % 3 == 0) {
            msg = "Fizz";
        } else {
            msg = this.state.count;
        }
        return (
            <div>
                <div>
                    {msg}
                </div>
                <div>
                    <button type="button" onClick={this.handleClick}>
                        クリック
                    </button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);
