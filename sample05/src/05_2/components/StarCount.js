import React from "react";

export default class StarCount extends React.Component {
    render() {
        return (
            <div>
                {"★".repeat(this.props.count)}
            </div>
        );
    }
}