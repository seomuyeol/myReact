import React from "react";
import PropTypes from "prop-types";

// コメントをヒントにResetButtonクラスを完成させてください
// ※ヒントコメント以外のところも書かないとプログラムが正常動作しません
export default class ResetButton extends React.Component {
    handleClick() {
        // propsで渡されるonClickを呼び出す（引数なし）
    }

    render() {
        return (
            <button type="button" onClick={this.handleClick}>
                Reset
            </button>
        );
    }
}
ResetButton.propTypes = {
    onClick: PropTypes.func.isRequired
};
