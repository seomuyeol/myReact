import React from "react";
import { connect } from "react-redux";
import { addPost, changeFormValue } from "../actions";
  
class AddPost extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.state = {
            text: ""
        };
        */
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
        //this.setState({[e.target.name]: e.target.value});
        this.props.changeFormValue(e.target.name, e.target.value);
    }
  
    handleSubmit(e) {
        e.preventDefault();
        
        /*
        this.props.addPost(this.state.text);
        this.setState({text: ""});
        */
       // 呼び出されるaddPostは次項で改造します
       this.props.addPost(this.props.text);
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="text"
                    //value={this.state.text}
                    value={this.props.text}
                    onChange={this.handleChange} />
                <input type="submit" value="追加" />
            </form>
        );
    }
}
  
function mapStateToProps(state) {
    return {
        text: state.form.text,
    }
}
const mapDispatchToProps = { addPost, changeFormValue }; //←changeFormValue追加
//↓mapStateToProps追加
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);