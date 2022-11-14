import React from "react";
import ReactDOM from "react-dom";

// Calculatorクラスを正しく動作するように作成してください
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            sum: 0
        };

        this.setNumber1 = this.number.bind(this, 1);
        this.setNumber2 = this.number.bind(this, 2);
        this.setNumber3 = this.number.bind(this, 3);
        this.setNumber4 = this.number.bind(this, 4);
        this.setNumber5 = this.number.bind(this, 5);
        this.setNumber6 = this.number.bind(this, 6);
        this.setNumber7 = this.number.bind(this, 7);
        this.setNumber8 = this.number.bind(this, 8);
        this.setNumber9 = this.number.bind(this, 9);
        this.calculateSum = this.sum.bind(this);

    }

    number(amount) {
        this.setState({number: this.state.number = amount});
    }

    sum() {
        this.setState({sum: this.state.sum + this.state.number});
    }



    render() {
        return (
            <div>
                <div>
                    <button type="button" onClick={this.setNumber7}>7</button>
                    <button type="button" onClick={this.setNumber8}>8</button>
                    <button type="button" onClick={this.setNumber9}>9</button>
                </div>
                <div>
                    <button type="button" onClick={this.setNumber4}>4</button>
                    <button type="button" onClick={this.setNumber5}>5</button>
                    <button type="button" onClick={this.setNumber6}>6</button>
                </div>
                <div>
                    <button type="button" onClick={this.setNumber1}>1</button>
                    <button type="button" onClick={this.setNumber2}>2</button>
                    <button type="button" onClick={this.setNumber3}>3</button>
                </div>
                <div>
                    <button type="button" onClick={this.calculateSum}>+</button>
                </div>
                <table>
                    <tbody>
                        <tr><td>number:</td><td>{this.state.number}</td></tr>
                        <tr><td>sum:</td><td>{this.state.sum}</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
);
